/**
 * Client-side validation utility for financialcalculatorapp.com forms.
 */

export interface ValidationRules {
  required?: boolean;
  min?: number;
  max?: number;
  integer?: boolean;
  custom?: (val: number) => string | null;
}

/**
 * Validates a single input field by element ID.
 * Toggles error styling on the input and reveals the corresponding error text container.
 * 
 * @returns Error message string if invalid, or null if valid.
 */
export function validateField(id: string, rules: ValidationRules): string | null {
  if (typeof window === 'undefined') return null;

  if (!rules) return null;

  const el = document.getElementById(id) as HTMLInputElement | null;
  if (!el) return null;

  const valueStr = el.value.trim();
  const errorEl = document.getElementById(`${id}-error`);

  // Reset state
  el.classList.remove('border-error', 'focus:border-error', 'focus:ring-error', 'focus-within:ring-error');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }

  if (rules.required && !valueStr) {
    const msg = 'This field is required.';
    showError(el, errorEl, msg);
    return msg;
  }

  if (valueStr !== '') {
    const val = parseFloat(valueStr);
    if (isNaN(val)) {
      const msg = 'Please enter a valid number.';
      showError(el, errorEl, msg);
      return msg;
    }

    if (rules.min !== undefined && val < rules.min) {
      const msg = `Value must be at least ${rules.min}.`;
      showError(el, errorEl, msg);
      return msg;
    }

    if (rules.max !== undefined && val > rules.max) {
      const msg = `Value must be at most ${rules.max}.`;
      showError(el, errorEl, msg);
      return msg;
    }

    if (rules.integer && !Number.isInteger(val)) {
      const msg = 'Please enter a whole number.';
      showError(el, errorEl, msg);
      return msg;
    }

    if (rules.custom) {
      const customMsg = rules.custom(val);
      if (customMsg) {
        showError(el, errorEl, customMsg);
        return customMsg;
      }
    }
  }

  return null;
}

/**
 * Checks if a complete form has any validation errors.
 * 
 * @param validations An object mapping field IDs to their validation rules
 * @returns True if all fields are valid, false otherwise.
 */
export function validateForm(validations: Record<string, ValidationRules>): boolean {
  let isValid = true;
  Object.entries(validations).forEach(([id, rules]) => {
    const err = validateField(id, rules);
    if (err !== null) {
      isValid = false;
    }
  });
  return isValid;
}

function showError(el: HTMLInputElement, errorEl: HTMLElement | null, message: string) {
  el.classList.add('border-error', 'focus:border-error', 'focus:ring-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
}
