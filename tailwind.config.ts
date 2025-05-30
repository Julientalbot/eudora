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
        coral: "#E8B4B4",
        turquoise: "#4ECDC4",
        "tropical-green": "#95E1D3", 
        sand: "#F5F3F0",
        cream: "#FEFEFE",
        "gold": "#D4AF37",
        "charcoal": "#2C2C2C",
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out',
        'slideUp': 'slideUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradientShift': 'gradientShift 3s ease-in-out infinite',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 107, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(78, 205, 196, 0.5)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;