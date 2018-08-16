// Colors
const color = {
  'white': '#fff',
  'grey': '#333333',
  'light-grey': '#fafafa',
  'light-grey2': '#f7f7f7',
  'light-grey3': '#ada7a7',
  'light-grey4': '#9B9B9B',
  'dark-grey': '#4A4A4A',
  'green-teal': '#00ab6b',
  'teal': '#58d09f',
  'gold': '#FFD700',
  'green': '#4CAF50',
  'primary-color': '#912099',
  'secondary-color': '#340E42',
  'light-grey-border': '#EDEDED',
  'light-grey-dark-border': '#CFCCCC',
  'light-color': '#aaa',

  // Background color
  'light-bg': '#EDEDED',

  // Shadow
  'glob-box-shadow': '0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)',
}
// Navigation colors
color['nav-backgroun'] = color['grey']
color['nav-text-color'] = color['primary-color']

// Todo | We'll use the correct font here.
// Font Family
const fontFamily = {
  regular: 'Helvetica',
  bold: 'Helvetica',
  light: 'Helvetica',
}
// End Font Family

// Font Scale
const fontScale = {
  xs: {
    fontSize: 12,
    lineHeight: 16,
  },
  sm: {
    fontSize: 14,
    lineHeight: 20,
  },
  base: {
    fontSize: 16,
    lineHeight: 22,
  },
  md: {
    fontSize: 18,
    lineHeight: 26,
  },
  lg: {
    fontSize: 20,
    lineHeight: 26,
  },
  xl: {
    fontSize: 26,
    lineHeight: 30,
  },
}
// End Font Scale

export {
  color,
  fontFamily,
  fontScale,
}