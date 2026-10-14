/**
 * Enhances a Chart.js <canvas> with fullscreen preview + PNG download buttons.
 *
 * Usage (inside a page's <script>):
 *   import { enhanceChartCanvas } from '../../lib/chart-canvas-actions';
 *   enhanceChartCanvas('mortgage-chart');
 *
 * - Injects a small Zoom / Download button bar into the canvas wrapper.
 * - Fullscreen opens a modal overlay, enlarges the chart wrapper and lets
 *   Chart.js resize itself (via ResizeObserver + window resize event).
 * - Download renders the canvas onto a filled background and saves a PNG.
 * - Button labels follow <html lang> (en/es/de/ja/fr/pt), no i18n files needed.
 */

interface ChartCanvasLabels {
  preview: string;
  previewTitle: string;
  close: string;
  closeTitle: string;
  download: string;
  downloadTitle: string;
  dialogLabel: string;
}

const LABELS: Record<string, ChartCanvasLabels> = {
  en: {
    preview: 'Preview',
    previewTitle: 'Preview chart full screen',
    close: 'Close',
    closeTitle: 'Close preview (Esc)',
    download: 'PNG',
    downloadTitle: 'Download chart image (PNG)',
    dialogLabel: 'Chart preview',
  },
  es: {
    preview: 'Vista',
    previewTitle: 'Ver gráfico en pantalla completa',
    close: 'Cerrar',
    closeTitle: 'Cerrar vista (Esc)',
    download: 'PNG',
    downloadTitle: 'Descargar imagen del gráfico (PNG)',
    dialogLabel: 'Vista del gráfico',
  },
  de: {
    preview: 'Vorschau',
    previewTitle: 'Diagramm im Vollbild anzeigen',
    close: 'Schließen',
    closeTitle: 'Vorschau schließen (Esc)',
    download: 'PNG',
    downloadTitle: 'Diagrammbild herunterladen (PNG)',
    dialogLabel: 'Diagrammvorschau',
  },
  ja: {
    preview: '拡大',
    previewTitle: 'グラフを全画面で表示',
    close: '閉じる',
    closeTitle: 'プレビューを閉じる (Esc)',
    download: 'PNG',
    downloadTitle: 'グラフ画像をダウンロード (PNG)',
    dialogLabel: 'グラフのプレビュー',
  },
  fr: {
    preview: 'Aperçu',
    previewTitle: 'Voir le graphique en plein écran',
    close: 'Fermer',
    closeTitle: "Fermer l'aperçu (Échap)",
    download: 'PNG',
    downloadTitle: "Télécharger l'image du graphique (PNG)",
    dialogLabel: 'Aperçu du graphique',
  },
  pt: {
    preview: 'Prévia',
    previewTitle: 'Ver gráfico em tela cheia',
    close: 'Fechar',
    closeTitle: 'Fechar prévia (Esc)',
    download: 'PNG',
    downloadTitle: 'Baixar imagem do gráfico (PNG)',
    dialogLabel: 'Prévia do gráfico',
  },
};

function getLabels(): ChartCanvasLabels {
  const lang = (document.documentElement.getAttribute('lang') || 'en')
    .toLowerCase()
    .split('-')[0];
  return LABELS[lang] || LABELS.en;
}

function isDarkTheme(): boolean {
  return (
    document.documentElement.dataset.theme === 'dark' ||
    document.documentElement.classList.contains('dark')
  );
}

export interface EnhanceChartCanvasOptions {
  /** PNG filename without extension. Defaults to the canvas id. */
  filename?: string;
}

export function enhanceChartCanvas(
  canvasId: string,
  options: EnhanceChartCanvasOptions = {}
): void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  // Avoid double-enhancing (e.g. Astro view transitions / HMR).
  if (canvas.dataset.chartActions === 'true') return;
  canvas.dataset.chartActions = 'true';

  const filename = options.filename || canvasId;
  const t = getLabels();

  const wrapperParent = canvas.parentElement;
  if (!(wrapperParent instanceof HTMLElement)) return;
  const wrapper: HTMLElement = wrapperParent;
  if (getComputedStyle(wrapper).position === 'static') {
    wrapper.style.position = 'relative';
  }

  // --- Button bar ---
  const bar = document.createElement('div');
  bar.className =
    'absolute top-1 right-1 z-10 flex items-center gap-1.5 no-print';
  bar.innerHTML =
    '<button type="button" data-action="preview" class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-canvas-soft/90 hover:bg-canvas-soft-2 text-mute hover:text-ink border border-hairline transition-colors cursor-pointer backdrop-blur-sm">' +
    '<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>' +
    '<span></span></button>' +
    '<button type="button" data-action="download" class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-canvas-soft/90 hover:bg-canvas-soft-2 text-mute hover:text-ink border border-hairline transition-colors cursor-pointer backdrop-blur-sm">' +
    '<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>' +
    '<span></span></button>';

  const previewBtn = bar.querySelector<HTMLButtonElement>('[data-action="preview"]')!;
  const downloadBtn = bar.querySelector<HTMLButtonElement>('[data-action="download"]')!;
  previewBtn.querySelector('span')!.textContent = t.preview;
  previewBtn.title = t.previewTitle;
  previewBtn.setAttribute('aria-label', t.previewTitle);
  downloadBtn.querySelector('span')!.textContent = t.download;
  downloadBtn.title = t.downloadTitle;
  downloadBtn.setAttribute('aria-label', t.downloadTitle);
  wrapper.appendChild(bar);

  // --- Fullscreen overlay ---
  let overlay: HTMLDivElement | null = null;
  let placeholder: Comment | null = null;
  let originalHeight = '';

  function nudgeChartResize() {
    // Chart.js observes its container + window resize; both fire the re-layout.
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }

  function openPreview() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className =
      'fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 no-print';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', t.dialogLabel);
    overlay.innerHTML =
      '<div class="w-full max-w-5xl bg-canvas border border-hairline rounded-xl shadow-2xl p-4 sm:p-6">' +
      '<div class="flex items-center justify-end mb-3">' +
      '<button type="button" data-action="close" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-canvas-soft hover:bg-canvas-soft-2 text-ink border border-hairline transition-colors cursor-pointer">' +
      '<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>' +
      '<span></span></button>' +
      '</div>' +
      '<div data-slot class="w-full"></div>' +
      '</div>';

    const closeBtn = overlay.querySelector<HTMLButtonElement>('[data-action="close"]')!;
    closeBtn.querySelector('span')!.textContent = t.close;
    closeBtn.title = t.closeTitle;
    closeBtn.setAttribute('aria-label', t.closeTitle);
    closeBtn.addEventListener('click', closePreview);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePreview();
    });

    // Move the wrapper (with canvas + buttons) into the overlay.
    placeholder = document.createComment('chart-preview-placeholder');
    wrapper.parentNode!.insertBefore(placeholder, wrapper);
    originalHeight = wrapper.style.height;
    wrapper.style.height = '68vh';
    overlay.querySelector('[data-slot]')!.appendChild(wrapper);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    bar.style.display = 'none';
    nudgeChartResize();
  }

  function closePreview() {
    if (!overlay || !placeholder) return;
    placeholder.parentNode!.insertBefore(wrapper, placeholder);
    placeholder.remove();
    placeholder = null;
    wrapper.style.height = originalHeight;
    overlay.remove();
    overlay = null;
    document.body.style.overflow = '';
    bar.style.display = '';
    nudgeChartResize();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') closePreview();
  }

  previewBtn.addEventListener('click', () => {
    document.addEventListener('keydown', onKeyDown, { once: true });
    openPreview();
  });

  // --- PNG download ---
  downloadBtn.addEventListener('click', () => {
    const scale = 2; // 2x for crisp exports
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width * scale;
    exportCanvas.height = canvas.height * scale;
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(scale, scale);
    ctx.fillStyle = isDarkTheme() ? '#0a0a0a' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    exportCanvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename.endsWith('-chart')
        ? `${filename}.png`
        : `${filename}-chart.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  });
}
