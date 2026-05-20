"use client";

import { useEffect, useState } from "react";

type SceneKind = "basic" | "medium" | "complex";

const W = 320;
const H = 200;
const BX = 56;
const BY = 30;
const BW = W - BX * 2;
const FLOORS = 7;
const FLOOR_H = 20;
const CROWN_H = 12;
const BASE_H = 14;
const COLS = 9;
const colW = BW / COLS;
const winW = colW * 0.5;
const winH = FLOOR_H * 0.55;
const winOffX = (colW - winW) / 2;
const winOffY = (FLOOR_H - winH) / 2;
const baseTop = BY + CROWN_H + FLOORS * FLOOR_H;
const doorW = colW * 0.9;
const doorH = BASE_H - 2;
const doorX = (W - doorW) / 2;
const doorY = baseTop + 1;
const canopyW = doorW + 18;
const canopyH = 3;
const canopyX = (W - canopyW) / 2;
const canopyY = doorY - canopyH - 1;
const sideWinW = colW * 0.5;
const sideWinH = 6;

const crownTop = BY;
const crownBase = BY + CROWN_H;
const crownPts = [
  [BX, crownBase],
  [BX + 18, crownBase],
  [BX + 28, crownTop + 4],
  [BX + 70, crownTop + 4],
  [BX + 90, crownTop],
  [BX + BW - 90, crownTop],
  [BX + BW - 70, crownTop + 4],
  [BX + BW - 28, crownTop + 4],
  [BX + BW - 18, crownBase],
  [BX + BW, crownBase],
]
  .map((p) => p.join(","))
  .join(" ");

function lit(kind: SceneKind, c: number, f: number, t: number) {
  if (kind === "basic") return 0.55 + 0.18 * Math.sin(t * 0.7);
  if (kind === "medium") {
    const floorBias = (FLOORS - f) / FLOORS;
    const group = Math.floor(c / 3);
    const grpPhase = Math.sin(t * 0.9 + group * 1.7) * 0.5 + 0.5;
    return 0.2 + 0.65 * floorBias * (0.55 + 0.45 * grpPhase);
  }
  const chase = (((c - t * 2.4) % COLS) + COLS) % COLS;
  const onChase = chase < 2.4 ? (1 - chase / 2.4) * 0.85 : 0;
  const base = 0.22 + 0.5 * (0.5 + 0.5 * Math.sin(f * 0.7 + t * 1.2));
  const sparkle = f === 0 && Math.sin(c * 2.7 + t * 6) > 0.6 ? 0.5 : 0;
  return Math.min(1, base + onChase + sparkle);
}

export function ScenePreview({ kind = "basic" }: { kind?: SceneKind }) {
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      setT((now - t0) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const windows: React.ReactElement[] = [];
  for (let f = 0; f < FLOORS; f++) {
    for (let c = 0; c < COLS; c++) {
      const x = BX + c * colW + winOffX;
      const y = BY + CROWN_H + f * FLOOR_H + winOffY;
      const a = lit(kind, c, f, t);
      windows.push(
        <rect
          key={`w-${c}-${f}`}
          x={x}
          y={y}
          width={winW}
          height={winH}
          fill="#f4f3ee"
          opacity={a.toFixed(3)}
        />,
      );
      windows.push(
        <line
          key={`m-${c}-${f}`}
          x1={x + winW / 2}
          y1={y}
          x2={x + winW / 2}
          y2={y + winH}
          stroke="#0a0a0a"
          strokeWidth="0.6"
          opacity={a.toFixed(3)}
        />,
      );
    }
  }

  const cornices: React.ReactElement[] = [];
  for (let f = 1; f < FLOORS; f++) {
    const yy = BY + CROWN_H + f * FLOOR_H;
    cornices.push(
      <line
        key={`c-${f}`}
        x1={BX}
        y1={yy}
        x2={BX + BW}
        y2={yy}
        stroke="rgba(244,243,238,0.12)"
        strokeWidth="0.5"
      />,
    );
  }

  const marquee: React.ReactElement[] = [];
  const dotCount = 7;
  for (let i = 0; i < dotCount; i++) {
    const phase = (i / dotCount + t * 0.6) % 1;
    const op = 0.4 + 0.6 * Math.max(0, Math.sin(phase * Math.PI * 2));
    marquee.push(
      <circle
        key={`d-${i}`}
        cx={canopyX + (i + 0.5) * (canopyW / dotCount)}
        cy={canopyY + canopyH / 2}
        r="0.9"
        fill="#f4f3ee"
        opacity={op.toFixed(2)}
      />,
    );
  }

  return (
    <div className="scene-anim" aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <line
          x1="0"
          y1={baseTop + BASE_H + 6}
          x2={W}
          y2={baseTop + BASE_H + 6}
          stroke="rgba(244,243,238,0.25)"
          strokeWidth="0.5"
        />
        <rect
          x="0"
          y={baseTop - 28}
          width={BX - 6}
          height={28 + BASE_H + 6}
          fill="#1a1a1a"
          stroke="rgba(244,243,238,0.1)"
          strokeWidth="0.5"
        />
        <rect
          x={W - BX + 6}
          y={baseTop - 22}
          width={BX - 6}
          height={22 + BASE_H + 6}
          fill="#1a1a1a"
          stroke="rgba(244,243,238,0.1)"
          strokeWidth="0.5"
        />
        <rect
          x={BX}
          y={BY + CROWN_H}
          width={BW}
          height={FLOORS * FLOOR_H + BASE_H}
          fill="#0a0a0a"
          stroke="rgba(244,243,238,0.35)"
          strokeWidth="0.6"
        />
        <polygon
          points={crownPts}
          fill="#0a0a0a"
          stroke="rgba(244,243,238,0.35)"
          strokeWidth="0.6"
        />
        <line
          x1={W / 2}
          y1={crownTop}
          x2={W / 2}
          y2={crownTop - 10}
          stroke="rgba(244,243,238,0.5)"
          strokeWidth="0.6"
        />
        <rect x={W / 2} y={crownTop - 9} width="5" height="3" fill="#f4f3ee" opacity="0.6" />
        {cornices}
        <line
          x1={BX}
          y1={baseTop}
          x2={BX + BW}
          y2={baseTop}
          stroke="rgba(244,243,238,0.45)"
          strokeWidth="0.7"
        />
        {windows}
        <rect
          x={BX + colW * 1.2}
          y={doorY + (doorH - sideWinH) / 2}
          width={sideWinW}
          height={sideWinH}
          fill="#f4f3ee"
          opacity="0.45"
        />
        <rect
          x={BX + BW - colW * 1.2 - sideWinW}
          y={doorY + (doorH - sideWinH) / 2}
          width={sideWinW}
          height={sideWinH}
          fill="#f4f3ee"
          opacity="0.45"
        />
        <rect
          x={canopyX}
          y={canopyY}
          width={canopyW}
          height={canopyH}
          fill="#0a0a0a"
          stroke="rgba(244,243,238,0.5)"
          strokeWidth="0.5"
        />
        {marquee}
        <rect x={doorX} y={doorY} width={doorW} height={doorH} fill="#f4f3ee" opacity="0.85" />
        <line
          x1={doorX + doorW / 2}
          y1={doorY}
          x2={doorX + doorW / 2}
          y2={doorY + doorH}
          stroke="#0a0a0a"
          strokeWidth="0.6"
        />
        <line
          x1="0"
          y1={baseTop + BASE_H}
          x2={W}
          y2={baseTop + BASE_H}
          stroke="rgba(244,243,238,0.5)"
          strokeWidth="0.7"
        />
      </svg>
    </div>
  );
}
