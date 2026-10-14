/**
 * Utilities for exporting and downloading Recharts SVG charts as PNG or SVG images.
 */

export interface ExportChartOptions {
  filename?: string;
  scale?: number;
  backgroundColor?: string;
}

/**
 * Downloads a rendered chart within a container element as a high-resolution PNG image.
 */
export async function downloadChartAsPng(
  container: HTMLElement | null,
  options: ExportChartOptions = {}
): Promise<boolean> {
  if (!container || typeof window === 'undefined') return false;

  const svgElement = container.querySelector('svg.recharts-surface') as SVGSVGElement | null;
  if (!svgElement) {
    console.warn('Chart SVG element not found inside container.');
    return false;
  }

  const {
    filename = 'financial-chart.png',
    scale = 2,
    backgroundColor
  } = options;

  try {
    // Clone SVG to avoid mutating DOM
    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;

    // Ensure width and height attributes are explicitly set in pixels
    const rect = svgElement.getBoundingClientRect();
    const width = rect.width || 800;
    const height = rect.height || 400;

    clonedSvg.setAttribute('width', `${width}`);
    clonedSvg.setAttribute('height', `${height}`);
    if (!clonedSvg.getAttribute('viewBox')) {
      clonedSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    }

    // Embed current computed font family and color definitions
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important; }
    `;
    clonedSvg.insertBefore(styleEl, clonedSvg.firstChild);

    // Serialize SVG
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(clonedSvg);

    // Add standard XML namespace if missing
    if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
      svgString = svgString.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    }

    // Determine background color
    const isDark =
      document.documentElement.dataset.theme === 'dark' ||
      document.documentElement.classList.contains('dark');
    const bg = backgroundColor || (isDark ? '#0f172a' : '#ffffff');

    // Create Canvas
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;

    // Fill background
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load SVG as image
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URLObj = window.URL || window.webkitURL || window;
    const blobUrl = URLObj.createObjectURL(svgBlob);

    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URLObj.revokeObjectURL(blobUrl);
        resolve();
      };
      img.onerror = (err) => {
        URLObj.revokeObjectURL(blobUrl);
        reject(err);
      };
      img.src = blobUrl;
    });

    // Trigger download
    const pngUrl = canvas.toDataURL('image/png');
    const downloadAnchor = document.createElement('a');
    const safeName = filename.endsWith('.png') ? filename : `${filename}.png`;
    downloadAnchor.download = safeName;
    downloadAnchor.href = pngUrl;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);

    return true;
  } catch (err) {
    console.error('Failed to export chart as PNG:', err);
    // Fallback to SVG download if Canvas export fails
    return downloadChartAsSvg(container, { filename: filename.replace(/\.png$/, '.svg') });
  }
}

/**
 * Downloads a rendered chart as an SVG vector file.
 */
export function downloadChartAsSvg(
  container: HTMLElement | null,
  options: { filename?: string } = {}
): boolean {
  if (!container || typeof window === 'undefined') return false;

  const svgElement = container.querySelector('svg.recharts-surface') as SVGSVGElement | null;
  if (!svgElement) return false;

  const { filename = 'financial-chart.svg' } = options;

  try {
    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
    const rect = svgElement.getBoundingClientRect();
    const width = rect.width || 800;
    const height = rect.height || 400;

    clonedSvg.setAttribute('width', `${width}`);
    clonedSvg.setAttribute('height', `${height}`);
    if (!clonedSvg.getAttribute('viewBox')) {
      clonedSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    }

    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(clonedSvg);
    if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
      svgString = svgString.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    }

    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URLObj = window.URL || window.webkitURL || window;
    const blobUrl = URLObj.createObjectURL(blob);

    const downloadAnchor = document.createElement('a');
    const safeName = filename.endsWith('.svg') ? filename : `${filename}.svg`;
    downloadAnchor.download = safeName;
    downloadAnchor.href = blobUrl;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URLObj.revokeObjectURL(blobUrl);

    return true;
  } catch (err) {
    console.error('Failed to export chart as SVG:', err);
    return false;
  }
}
