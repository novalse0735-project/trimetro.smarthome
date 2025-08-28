module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional blue for trust and technology credibility
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        
        // Secondary Colors - Deeper blue for section headers and emphasis
        secondary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#1E40AF", // blue-800
        },
        
        // Accent Colors - Conversion green for CTAs and success indicators
        accent: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          DEFAULT: "#10B981", // emerald-500
        },
        
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          DEFAULT: "#F8FAFC", // slate-50
        },
        
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
          muted: "#9CA3AF", // gray-400
        },
        
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          600: "#059669", // emerald-600
          DEFAULT: "#059669", // emerald-600
        },
        
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          DEFAULT: "#F59E0B", // amber-500
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          600: "#DC2626", // red-600
          DEFAULT: "#DC2626", // red-600
        },
        
        // Border Colors
        border: {
          light: "#F3F4F6", // gray-100
          DEFAULT: "#E5E7EB", // gray-200
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subsection': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      
      boxShadow: {
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      
      animation: {
        'pulse-cta': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      transitionDuration: {
        '200': '200ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          'transition': 'all 200ms ease-in-out',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}