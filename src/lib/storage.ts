/**
 * Safe wrapper for localStorage to prevent SecurityErrors in sandboxed/restricted environments.
 * Falls back to an in-memory session cache when storage access is denied.
 */

const memoryStorage: Record<string, string> = {};

export function safeGetItem(key: string, defaultValue = ''): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const val = window.localStorage.getItem(key);
      if (val !== null) return val;
    }
  } catch (e) {
    // localStorage blocked
  }
  return memoryStorage[key] !== undefined ? memoryStorage[key] : defaultValue;
}

export function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      memoryStorage[key] = value;
      return;
    }
  } catch (e) {
    // localStorage blocked
  }
  memoryStorage[key] = value;
}

/**
 * Safely parses JSON from localStorage without throwing exceptions on corrupted or poisoned data.
 */
export function safeGetJSON<T>(key: string, defaultValue: T): T {
  try {
    const raw = safeGetItem(key);
    if (!raw) return defaultValue;
    const parsed = JSON.parse(raw);
    return parsed !== null && parsed !== undefined ? (parsed as T) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}
