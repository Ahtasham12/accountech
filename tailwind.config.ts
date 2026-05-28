import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core dark palette
        navy: '#0A0E1A',
        'navy-800': '#0F1628',
        'navy-700': '#141D35',
        'navy-600': '#1A2540',
        // Accents
        accent: '#4F8CFF',
        'accent-dark': '#3A72E0',
        'accent-glow': 'rgba(79,140,255,0.25)',
        cyan: '#00D4FF',
        'cyan-glow': 'rgba(0,212,255,0.25)',
        emerald: '#10B981',
        'emerald-glow': 'rgba(16,185,129,0.25)',
        // Glass surfaces
        'surface': 'rgba(255,255,255,0.04)',
        'surface-hover': 'rgba(255,255,255,0.07)',
        'border-glass': 'rgba(255,255,255,0.08)',
        'border-glass-bright': 'rgba(255,255,255,0.15)',
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255,255,255,0.60)',
        'text-muted': 'rgba(255,255,255,0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-md': ['56px', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-sm': ['40px', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display': ['48px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #4F8CFF 0%, #00D4FF 100%)',
        'gradient-text': 'linear-gradient(135deg, #FFFFFF 0%, #93B8FF 50%, #00D4FF 100%)',
        'gradient-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(79,140,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.10) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(139,92,246,0.08) 0%, transparent 50%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1E3A7B 0%, #0A0E1A 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(79,140,255,0.3), 0 0 80px rgba(79,140,255,0.10)',
        'glow-blue-sm': '0 0 15px rgba(79,140,255,0.3)',
        'glow-cyan': '0 0 30px rgba(0,212,255,0.3), 0 0 80px rgba(0,212,255,0.10)',
        'glow-green': '0 0 30px rgba(16,185,129,0.3)',
        'card': '0 1px 0 rgba(255,255,255,0.06) inset, 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 rgba(255,255,255,0.08) inset, 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,140,255,0.2)',
        'nav': '0 1px 0 rgba(255,255,255,0.06)',
        'pricing-popular': '0 0 0 1px rgba(79,140,255,0.5), 0 0 40px rgba(79,140,255,0.15), 0 8px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'mesh-flow': 'mesh-flow 15s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
      },
      keyframes: {
        'mesh-flow': {
          '0%, 100%': { transform: 'translate(0%,0%) scale(1)' },
          '33%': { transform: 'translate(4%,-3%) scale(1.04)' },
          '66%': { transform: 'translate(-3%,4%) scale(0.97)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'data-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
export default config
