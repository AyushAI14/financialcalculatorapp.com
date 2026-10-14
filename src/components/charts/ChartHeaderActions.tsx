import React from 'react';

interface ChartHeaderActionsProps {
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onDownload: () => void;
  isDownloading?: boolean;
}

export default function ChartHeaderActions({
  isFullscreen,
  onToggleFullscreen,
  onDownload,
  isDownloading = false
}: ChartHeaderActionsProps) {
  return (
    <div className="flex items-center gap-1.5 self-start sm:self-auto no-print">
      {/* Zoom / Fullscreen Button */}
      <button
        type="button"
        onClick={onToggleFullscreen}
        title={isFullscreen ? 'Exit Full Screen (Esc)' : 'Zoom & Expand Chart Full Screen'}
        aria-label={isFullscreen ? 'Exit Full Screen' : 'Expand Full Screen'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors cursor-pointer border ${
          isFullscreen
            ? 'bg-primary text-on-primary border-primary shadow-xs'
            : 'bg-canvas-soft hover:bg-canvas-soft-2 text-mute hover:text-ink border-hairline'
        }`}
      >
        {isFullscreen ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Exit Fullscreen</span>
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span className="hidden sm:inline">Zoom Fullscreen</span>
          </>
        )}
      </button>

      {/* Download PNG Button */}
      <button
        type="button"
        onClick={onDownload}
        disabled={isDownloading}
        title="Download high-resolution chart image (PNG)"
        aria-label="Download chart image"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-canvas-soft hover:bg-canvas-soft-2 text-mute hover:text-ink border border-hairline transition-colors cursor-pointer disabled:opacity-50"
      >
        {isDownloading ? (
          <>
            <span className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="hidden sm:inline">Saving...</span>
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Download PNG</span>
          </>
        )}
      </button>
    </div>
  );
}
