import { ImageResponse } from 'next/og';

export const alt = 'Lumenar · Agents that do the work, and show it';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** The share card: near-white page, ink headline, one lime mark. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#fafafa', color: '#0a0a0a', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 8, fontWeight: 500 }}>LUMENAR</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 92, fontWeight: 600, letterSpacing: -4, lineHeight: 1.05 }}>
          <div style={{ display: 'flex' }}>Agents that do the work,</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            and
            <div style={{ display: 'flex', background: '#c4f042', borderRadius: 18, padding: '0 22px 6px' }}>show it.</div>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#525252' }}>Every step has a receipt. Anything irreversible waits for a person.</div>
      </div>
    ),
    size,
  );
}
