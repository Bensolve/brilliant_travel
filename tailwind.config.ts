/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

     
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        violet: {
          50: '#4E0D7D',
        },
        white_smoke: {
          70: '#f5f5f5',
        }
      },
     
      backgroundImage: {
        'bg-img-1': "url('/dubai.jpg')",
        'bg-img-2': "url('/canada.jpg')",
        'bg-img-3': "url('/southafrica.jpg')",
        'bg-img-4': "url('/usa.jpg')",
        'bg-img-0': "url('/ghana.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
        'circle': '50%',
        'smaller':'20px'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '100': '100',
        '11111': '11111',
        // Add more as needed
      },

    },
  },
  plugins: [],
};