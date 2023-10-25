/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // screens: {
    //   "surface-duo": "538px"
    // },

    extend: {
      animation: {
        'scrolling': 'scrollImg 6s linear infinite'
      },
      keyframes: {
        scrollImg: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
    },
  },
  plugins: [],
}
