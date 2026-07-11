/**
 * Utility to export HTML table elements or raw arrays of data to a CSV file.
 */

/**
 * Downloads an HTML table element as a CSV.
 * 
 * @param tableId ID of the table element to parse
 * @param filename File name for the download (defaults to 'schedule.csv')
 */
export function downloadTableAsCSV(tableId: string, filename = 'schedule.csv') {
  if (typeof window === 'undefined') return;

  const table = document.getElementById(tableId);
  if (!table) {
    console.error(`Table element with ID "${tableId}" not found.`);
    return;
  }

  let csvContent = "";
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cols = row.querySelectorAll('th, td');
    const rowData = Array.from(cols)
      .map(col => {
        // Clean text content: remove newlines, double quotes escape, wrap in quotes
        const text = col.textContent?.trim().replace(/\s+/g, ' ') || '';
        return `"${text.replace(/"/g, '""')}"`;
      })
      .join(',');
    
    csvContent += rowData + "\r\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Downloads a raw data array as a CSV.
 * 
 * @param headers Headers of the CSV columns
 * @param rows Data rows (each row is an array of strings or numbers)
 * @param filename File name for the download (defaults to 'data.csv')
 */
export function downloadDataAsCSV(headers: string[], rows: (string | number)[][], filename = 'data.csv') {
  if (typeof window === 'undefined') return;

  let csvContent = headers.map(h => `"${h.replace(/"/g, '""')}"`).join(',') + "\r\n";

  rows.forEach((row) => {
    const rowData = row
      .map(val => {
        const text = String(val).trim();
        return `"${text.replace(/"/g, '""')}"`;
      })
      .join(',');
    csvContent += rowData + "\r\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
