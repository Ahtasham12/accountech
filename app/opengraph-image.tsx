import { ImageResponse } from 'next/og'

export const alt         = 'AccounTech — AI-Powered Bookkeeping for US Small Businesses'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0E1A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top aurora glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(79,110,247,0.35) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Bottom-right cyan accent */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              background: '#4F6EF7',
              borderRadius: 13,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span style={{ color: 'white', fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>
            Accoun
            <span style={{ color: '#4F6EF7' }}>Tech</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: 'white',
            fontSize: 62,
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.08,
            letterSpacing: -2,
            margin: '0 80px 24px',
          }}
        >
          AI-Powered Bookkeeping
          <br />
          for US Small Businesses
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: 'rgba(255,255,255,0.50)',
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 44,
          }}
        >
          Month-end close in 5 days · Starting at $349/month
        </div>

        {/* Pill badges */}
        <div style={{ display: 'flex', gap: 14 }}>
          {['AI-Powered', 'QBO Certified', 'Florida LLC'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(79,110,247,0.18)',
                border: '1px solid rgba(79,110,247,0.40)',
                color: '#7B9FFF',
                padding: '10px 24px',
                borderRadius: 999,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
