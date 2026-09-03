/**
 * Synchronizes form input values with URL query parameters.
 * Reads initial values on page load and updates the URL parameters in real-time.
 * 
 * @param formId ID of the form element
 * @param onUpdate Callback function to run calculations when inputs change
 */
export function syncInputsWithURL(formId: string, onUpdate: () => void) {
  if (typeof window === 'undefined') return;

  const form = document.getElementById(formId) as HTMLFormElement | null;
  if (!form) return;

  // 1. Parse URL query params and set initial values of inputs
  const params = new URLSearchParams(window.location.search);
  
  Array.from(form.elements).forEach((el) => {
    const input = el as HTMLInputElement | HTMLSelectElement;
    if (!input.name) return;
    
    const value = params.get(input.name);
    if (value !== null && value.length <= 100) {
      if (input.type === 'checkbox') {
        (input as HTMLInputElement).checked = value === 'true';
      } else {
        if (input.type === 'number') {
          const num = parseFloat(value);
          if (isFinite(num) && Math.abs(num) <= 1e12) {
            input.value = value;
          }
        } else {
          input.value = value;
        }
      }
    }
  });

  // 2. Add change/input listener to push updates to the URL
  const handleInput = () => {
    const newParams = new URLSearchParams();
    
    Array.from(form.elements).forEach((el) => {
      const input = el as HTMLInputElement | HTMLSelectElement;
      if (!input.name) return;

      if (input.type === 'checkbox') {
        if ((input as HTMLInputElement).checked) {
          newParams.set(input.name, 'true');
        }
      } else if (input.value && input.value !== (input instanceof HTMLInputElement ? input.defaultValue : '')) {
        newParams.set(input.name, input.value);
      }
    });

    const newQueryString = newParams.toString();
    const newUrl = `${window.location.pathname}${newQueryString ? '?' + newQueryString : ''}`;
    
    window.history.replaceState(null, '', newUrl);
    onUpdate();
  };

  form.addEventListener('input', handleInput);
  form.addEventListener('change', handleInput);
}
