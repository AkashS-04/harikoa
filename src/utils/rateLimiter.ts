/**
 * Rate Limiter Utility
 * Prevents abuse by tracking and limiting form submissions
 */

interface RateLimitConfig {
  maxSubmissions: number // Maximum submissions allowed
  timeWindow: number // Time window in milliseconds (e.g., 1 hour = 3600000)
  storageKey: string // localStorage key for tracking
}

interface SubmissionRecord {
  timestamp: number
  count: number
}

/**
 * Check if a submission is allowed based on rate limits
 * @param config Rate limit configuration
 * @returns Object with allowed status and remaining submissions
 */
export function checkRateLimit(config: RateLimitConfig): {
  allowed: boolean
  remaining: number
  resetTime: number | null
  message: string
} {
  const now = Date.now()
  const storageKey = config.storageKey

  try {
    // Get existing records from localStorage
    const stored = localStorage.getItem(storageKey)
    let record: SubmissionRecord | null = null

    if (stored) {
      record = JSON.parse(stored)
    }

    // If no record exists or record is expired, create new one
    if (!record || now - record.timestamp > config.timeWindow) {
      record = {
        timestamp: now,
        count: 0
      }
    }

    // Check if limit is exceeded
    if (record.count >= config.maxSubmissions) {
      const resetTime = record.timestamp + config.timeWindow
      const timeUntilReset = resetTime - now
      const minutesUntilReset = Math.ceil(timeUntilReset / 60000)

      return {
        allowed: false,
        remaining: 0,
        resetTime,
        message: `Rate limit exceeded. Please try again in ${minutesUntilReset} minute${minutesUntilReset !== 1 ? 's' : ''}.`
      }
    }

    // Increment count and save
    record.count++
    localStorage.setItem(storageKey, JSON.stringify(record))

    return {
      allowed: true,
      remaining: config.maxSubmissions - record.count,
      resetTime: record.timestamp + config.timeWindow,
      message: ''
    }
  } catch (error) {
    // If localStorage fails, allow submission (graceful degradation)
    console.warn('Rate limiter: localStorage access failed', error)
    return {
      allowed: true,
      remaining: config.maxSubmissions,
      resetTime: null,
      message: ''
    }
  }
}

/**
 * Get current rate limit status without incrementing
 */
export function getRateLimitStatus(config: RateLimitConfig): {
  remaining: number
  resetTime: number | null
  used: number
} {
  const now = Date.now()
  const storageKey = config.storageKey

  try {
    const stored = localStorage.getItem(storageKey)
    let record: SubmissionRecord | null = null

    if (stored) {
      record = JSON.parse(stored)
    }

    // If no record exists or record is expired
    if (!record || now - record.timestamp > config.timeWindow) {
      return {
        remaining: config.maxSubmissions,
        resetTime: null,
        used: 0
      }
    }

    return {
      remaining: Math.max(0, config.maxSubmissions - record.count),
      resetTime: record.timestamp + config.timeWindow,
      used: record.count
    }
  } catch (error) {
    console.warn('Rate limiter: localStorage access failed', error)
    return {
      remaining: config.maxSubmissions,
      resetTime: null,
      used: 0
    }
  }
}

/**
 * Clear rate limit records (useful for testing or manual reset)
 */
export function clearRateLimit(storageKey: string): void {
  try {
    localStorage.removeItem(storageKey)
  } catch (error) {
    console.warn('Rate limiter: Failed to clear rate limit', error)
  }
}

// Default configurations
export const RATE_LIMIT_CONFIGS = {
  CONTACT_FORM: {
    maxSubmissions: 5, // 5 submissions per hour
    timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
    storageKey: 'harikoa_contact_form_rate_limit'
  },
  CAREERS_FORM: {
    maxSubmissions: 3, // 3 submissions per hour
    timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
    storageKey: 'harikoa_careers_form_rate_limit'
  }
} as const

