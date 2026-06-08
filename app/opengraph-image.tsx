import { ImageResponse } from 'next/og'

export const alt         = 'Accounting Skip — AI-Powered Bookkeeping for US Small Businesses'
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
        }}
      >
        {/* Top blue glow */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(79,110,247,0.30) 0%, transparent 100%)',
          }}
        />

        {/* Bottom-right cyan accent */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '40%',
            height: '50%',
            background: 'radial-gradient(ellipse 80% 80% at 100% 100%, rgba(0,212,255,0.15) 0%, transparent 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 52,
                height: 52,
                background: '#4F6EF7',
                borderRadius: 13,
              }}
            >
              <div style={{ display: 'flex', color: 'white', fontSize: 28, fontWeight: 700 }}>⚡</div>
            </div>
            <div style={{ display: 'flex', color: 'white', fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>
              Accounting
              <span style={{ color: '#4F6EF7' }}> Skip</span>
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              display: 'flex',
              color: 'white',
              fontSize: 62,
              fontWeight: 800,
              textAlign: 'center',
              lineHeight: 1.08,
              letterSpacing: -2,
              marginBottom: 24,
              maxWidth: 1000,
            }}
          >
            AI-Powered Bookkeeping for US Small Businesses
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
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
                  display: 'flex',
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
      </div>
    ),
    { ...size },
  )
}
