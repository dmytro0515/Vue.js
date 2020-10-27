/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      padding: {
        '5/7': '71%',
        'full': '100%',
        'book': '120%'
      }
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
