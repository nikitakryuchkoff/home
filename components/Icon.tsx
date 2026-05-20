import type { JSX } from "react";

const PATHS: Record<string, JSX.Element> = {
  dmx: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="4" cy="4" r="1.5" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="20" cy="4" r="1.5" />
      <circle cx="4" cy="12" r="1.5" />
      <circle cx="20" cy="12" r="1.5" />
      <circle cx="4" cy="20" r="1.5" />
      <circle cx="12" cy="20" r="1.5" />
      <circle cx="20" cy="20" r="1.5" />
      <path d="M5.5 4h5 M13.5 4h5 M5.5 12h13 M5.5 20h5 M13.5 20h5 M4 5.5v5 M4 13.5v5 M12 5.5v13 M20 5.5v5 M20 13.5v5" />
    </g>
  ),
  pixel: (
    <g fill="currentColor">
      <rect x="3" y="3" width="4" height="4" />
      <rect x="10" y="3" width="4" height="4" opacity="0.4" />
      <rect x="17" y="3" width="4" height="4" />
      <rect x="3" y="10" width="4" height="4" opacity="0.4" />
      <rect x="10" y="10" width="4" height="4" />
      <rect x="17" y="10" width="4" height="4" opacity="0.4" />
      <rect x="3" y="17" width="4" height="4" />
      <rect x="10" y="17" width="4" height="4" opacity="0.4" />
      <rect x="17" y="17" width="4" height="4" />
    </g>
  ),
  scene: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M2 12 Q 6 4 10 12 T 18 12 T 22 12" />
      <circle cx="2" cy="12" r="1.2" fill="currentColor" />
      <circle cx="22" cy="12" r="1.2" fill="currentColor" />
    </g>
  ),
  neon: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <path d="M3 20 L3 8 L10 8 L10 14 L17 14 L17 4 L21 4" />
    </g>
  ),
  service: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v3 M12 18v3 M3 12h3 M18 12h3 M5.6 5.6l2.1 2.1 M16.3 16.3l2.1 2.1 M5.6 18.4l2.1-2.1 M16.3 7.7l2.1-2.1" />
    </g>
  ),
  multi: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="6" height="14" />
      <rect x="11" y="3" width="6" height="17" />
      <rect x="19" y="9" width="3" height="11" strokeWidth="1.2" />
    </g>
  ),
  team: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5 M11 20c0-3 2.2-5 5-5s5 2 5 5" />
    </g>
  ),
  responsibility: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" />
      <path d="M7 12l3.5 3.5L17 9" strokeLinecap="square" />
    </g>
  ),
};

export function Icon({ name }: { name: string }) {
  const p = PATHS[name];
  if (!p) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {p}
    </svg>
  );
}
