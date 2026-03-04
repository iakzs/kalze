'use client';

import { useRef, useEffect } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const SPARK_COLOR = '#e8b4d0';
const SPARK_SIZE = 10;
const SPARK_RADIUS = 15;
const SPARK_COUNT = 8;
const DURATION = 400;
const EXTRA_SCALE = 1.0;

export default function GlobalClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ease = (t: number) => t * (2 - t);

    const loop = (timestamp: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= DURATION) return false;

        const progress = elapsed / DURATION;
        const eased = ease(progress);
        const distance = eased * SPARK_RADIUS * EXTRA_SCALE;
        const lineLength = SPARK_SIZE * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = SPARK_COLOR;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const handleClick = (e: MouseEvent) => {
      const now = performance.now();
      const newSparks: Spark[] = Array.from({ length: SPARK_COUNT }, (_, i) => ({
        x: e.clientX,
        y: e.clientY,
        angle: (2 * Math.PI * i) / SPARK_COUNT,
        startTime: now,
      }));
      sparksRef.current.push(...newSparks);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
