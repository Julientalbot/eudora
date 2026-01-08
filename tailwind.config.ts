import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#E07A5F",
        "coral-light": "#F2C4B6",
        turquoise: "#3D9A8B",
        "turquoise-light": "#81B29A",
        "tropical-green": "#95E1D3",
        sand: "#F4F1DE",
        cream: "#FFFCF7",
        gold: "#C9A227",
        "gold-light": "#E8D59E",
        charcoal: "#1A1A1A",
        "warm-gray": "#847577",
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        'body': ['var(--font-body)', 'DM Sans', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideUp': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideIn': 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 8s ease-in-out infinite',
        'floatSlow': 'floatSlow 12s ease-in-out infinite',
        'gradientShift': 'gradientShift 4s ease-in-out infinite',
        'pulseGlow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'stitch': 'stitch 1.5s ease-out',
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.98)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(1deg)' },
          '75%': { transform: 'translateY(8px) rotate(-1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10px, -20px) scale(1.02)' },
          '66%': { transform: 'translate(-10px, 10px) scale(0.98)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(224, 122, 95, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(61, 154, 139, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        stitch: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        reveal: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'linen': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23847577' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 60px rgba(0, 0, 0, 0.08)',
        'glow-coral': '0 0 40px rgba(224, 122, 95, 0.15)',
        'glow-turquoise': '0 0 40px rgba(61, 154, 139, 0.15)',
        'inner-soft': 'inset 0 2px 10px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
} satisfies Config;