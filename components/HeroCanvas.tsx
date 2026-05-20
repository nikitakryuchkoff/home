"use client";

import { useEffect, useRef } from "react";

type V3 = [number, number, number];

function rotY(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [c * p[0] + s * p[2], p[1], -s * p[0] + c * p[2]];
}
function rotX(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [p[0], c * p[1] - s * p[2], s * p[1] + c * p[2]];
}
function rotZ(p: V3, a: number): V3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [c * p[0] - s * p[1], s * p[0] + c * p[1], p[2]];
}
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scl = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.floor(r.width * dpr);
      canvas.height = Math.floor(r.height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const S = 1;
    const cubeVerts: V3[] = [
      [-S, -S, -S],
      [S, -S, -S],
      [S, S, -S],
      [-S, S, -S],
      [-S, -S, S],
      [S, -S, S],
      [S, S, S],
      [-S, S, S],
    ];
    const cubeEdges: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    const RAY_COUNT = 11;
    const rays = Array.from({ length: RAY_COUNT }, (_, i) => ({
      phase: Math.random() * Math.PI * 2,
      angleBase: (i / RAY_COUNT) * Math.PI * 2 + Math.random() * 0.3,
      speed: 0.25 + Math.random() * 0.4,
      hue: 0.55 + Math.random() * 0.4,
      offset: Math.random() * 6,
      tiltPhase: Math.random() * Math.PI * 2,
    }));

    const rayHitCube = (
      px: number,
      py: number,
      pz: number,
      dx: number,
      dy: number,
      dz: number,
    ): { t: number; n: V3 } | null => {
      const eps = 1e-6;
      let tNear = -Infinity,
        tFar = Infinity;
      let nx = 0,
        ny = 0,
        nz = 0;
      if (Math.abs(dx) < eps) {
        if (px < -S || px > S) return null;
      } else {
        let t1 = (-S - px) / dx,
          t2 = (S - px) / dx;
        let n1 = -1,
          n2 = 1;
        if (t1 > t2) {
          [t1, t2] = [t2, t1];
          [n1, n2] = [n2, n1];
        }
        if (t1 > tNear) {
          tNear = t1;
          nx = n1;
          ny = 0;
          nz = 0;
        }
        if (t2 < tFar) tFar = t2;
        if (tNear > tFar) return null;
      }
      if (Math.abs(dy) < eps) {
        if (py < -S || py > S) return null;
      } else {
        let t1 = (-S - py) / dy,
          t2 = (S - py) / dy;
        let n1 = -1,
          n2 = 1;
        if (t1 > t2) {
          [t1, t2] = [t2, t1];
          [n1, n2] = [n2, n1];
        }
        if (t1 > tNear) {
          tNear = t1;
          nx = 0;
          ny = n1;
          nz = 0;
        }
        if (t2 < tFar) tFar = t2;
        if (tNear > tFar) return null;
      }
      if (Math.abs(dz) < eps) {
        if (pz < -S || pz > S) return null;
      } else {
        let t1 = (-S - pz) / dz,
          t2 = (S - pz) / dz;
        let n1 = -1,
          n2 = 1;
        if (t1 > t2) {
          [t1, t2] = [t2, t1];
          [n1, n2] = [n2, n1];
        }
        if (t1 > tNear) {
          tNear = t1;
          nx = 0;
          ny = 0;
          nz = n1;
        }
        if (t2 < tFar) tFar = t2;
        if (tNear > tFar) return null;
      }
      if (tNear < eps) return null;
      return { t: tNear, n: [nx, ny, nz] };
    };

    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const w = canvas.width / dpr,
        h = canvas.height / dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(244,243,238,0.04)";
      ctx.lineWidth = 1;
      const gs = 32;
      ctx.beginPath();
      for (let x = 0; x < w; x += gs) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += gs) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      const cx = w / 2,
        cy = h / 2;
      const scale = Math.min(w, h) * 0.22;
      const camDist = 4.2;
      const focal = 2.4;

      const ay = t * 0.25;
      const ax = Math.sin(t * 0.18) * 0.35 + 0.45;
      const az = Math.sin(t * 0.11) * 0.05;

      const project = (p: V3) => {
        let q = rotZ(p, az);
        q = rotX(q, ax);
        q = rotY(q, ay);
        const z = q[2] + camDist;
        const k = focal / z;
        return { x: cx + q[0] * scale * k, y: cy - q[1] * scale * k, z };
      };

      const projVerts = cubeVerts.map(project);
      const transformed = cubeVerts.map((p) => {
        let q = rotZ(p, az);
        q = rotX(q, ax);
        q = rotY(q, ay);
        return q;
      });

      const edgesD = cubeEdges.map(([a, b]) => ({
        a,
        b,
        mz: (transformed[a][2] + transformed[b][2]) / 2,
      }));
      edgesD.sort((e1, e2) => e2.mz - e1.mz);

      edgesD.forEach((e) => {
        const pa = projVerts[e.a],
          pb = projVerts[e.b];
        const depth = (e.mz - -1.8) / 3.6;
        const alpha = 0.18 + 0.55 * (1 - Math.min(1, Math.max(0, depth)));
        ctx.setLineDash(depth > 0.5 ? [3, 4] : []);
        ctx.strokeStyle = `rgba(244,243,238,${alpha.toFixed(3)})`;
        ctx.lineWidth = depth > 0.5 ? 0.8 : 1.1;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      const R = 3.6;
      const segments: {
        pO: { x: number; y: number; z: number };
        pH: { x: number; y: number; z: number };
        pE: { x: number; y: number; z: number };
        hue: number;
        pulse: number;
        mz: number;
      }[] = [];
      rays.forEach((r, i) => {
        const ang = r.angleBase + t * r.speed * (i % 2 ? -1 : 1);
        const tilt = Math.sin(t * 0.3 + r.tiltPhase) * 0.9;
        const o: V3 = [Math.cos(ang) * R, Math.sin(tilt) * R * 0.6, Math.sin(ang) * R];
        const target: V3 = [
          Math.sin(t * 0.6 + r.phase) * 0.7,
          Math.sin(t * 0.7 + r.offset) * 0.7,
          Math.cos(t * 0.5 + r.phase * 1.3) * 0.7,
        ];

        const d = norm(sub(target, o));
        const hit = rayHitCube(o[0], o[1], o[2], d[0], d[1], d[2]);
        if (!hit) return;
        const hpoint = add(o, scl(d, hit.t));
        const dn = dot(d, hit.n);
        const refl = sub(d, scl(hit.n, 2 * dn));
        const pulse = 0.5 + 0.5 * Math.sin(t * 2.0 + r.phase * 2);
        const reflLen = 2.0 + 3.5 * pulse;
        const endpoint = add(hpoint, scl(refl, reflLen));

        const pO = project(o);
        const pH = project(hpoint);
        const pE = project(endpoint);
        segments.push({ pO, pH, pE, hue: r.hue, pulse, mz: pH.z });
      });

      segments.sort((a, b) => b.mz - a.mz);

      segments.forEach((s) => {
        const g1 = ctx.createLinearGradient(s.pO.x, s.pO.y, s.pH.x, s.pH.y);
        g1.addColorStop(0, "rgba(244,243,238,0)");
        g1.addColorStop(1, `rgba(244,243,238,${(0.55 * s.hue).toFixed(3)})`);
        ctx.strokeStyle = g1;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(s.pO.x, s.pO.y);
        ctx.lineTo(s.pH.x, s.pH.y);
        ctx.stroke();

        const g2 = ctx.createLinearGradient(s.pH.x, s.pH.y, s.pE.x, s.pE.y);
        g2.addColorStop(0, `rgba(244,243,238,${(0.85 * s.hue).toFixed(3)})`);
        g2.addColorStop(0.4, `rgba(244,243,238,${(0.35 * s.hue).toFixed(3)})`);
        g2.addColorStop(1, "rgba(244,243,238,0)");
        ctx.strokeStyle = g2;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(s.pH.x, s.pH.y);
        ctx.lineTo(s.pE.x, s.pE.y);
        ctx.stroke();

        const dotR = 1.5 + s.pulse * 3;
        const dg = ctx.createRadialGradient(s.pH.x, s.pH.y, 0, s.pH.x, s.pH.y, dotR * 4);
        dg.addColorStop(0, `rgba(244,243,238,${(0.9 * s.hue).toFixed(3)})`);
        dg.addColorStop(1, "rgba(244,243,238,0)");
        ctx.fillStyle = dg;
        ctx.beginPath();
        ctx.arc(s.pH.x, s.pH.y, dotR * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(244,243,238,${(0.95 * s.hue).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.pH.x, s.pH.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="hero-right" aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-label="3D black cube with light rays reflecting off its faces"
      />
    </div>
  );
}
