'use client';
import { useEffect, useState } from 'react';

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

/** The live timer an agent shows while it works, next to Stop. Stop really stops it. */
export default function Timer({ from = 41 }: { from?: number }) {
  const [t, setT] = useState(from);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setT((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <>
      <span className="timer mono" aria-label={`Running for ${fmt(t)}`}>{fmt(t)}</span>
      <button type="button" className="stop" onClick={() => setRunning(false)} disabled={!running}>
        {running ? 'Stop' : 'Stopped'}
      </button>
    </>
  );
}
