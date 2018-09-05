/**
 * ***************************
 * Colors   ******************
 * ***************************
 */

const color = {
  'white': 'white',
  'grey': '#333333',
  'grey4A': '#4A4A4A',
  'grey9B': '#9B9B9B',
  'greyAA': '#aaaaaa',
  'greyAD': '#ada7a7',
  'greyB9': '#B9B9B9',
  'greyCF': '#CFCCCC',
  'greyD8': '#D8D8D8',
  'greyED': '#EDEDED',
  'greyFA': '#fafafa',
  'greyF7': '#f7f7f7',
  'green': '#4CAF50',
  'green-teal': '#00ab6b',
  'teal': '#58d09f',
  'gold': '#FFD700',
  'primary-color': '#912099',
  'secondary-color': '#340E42',
  'primary-color-light': '#EF4FFB',
}

/**
 * ***************************
 * Font Family   *************
 * ***************************
 */
// Todo | We'll use the correct font here.
const fontFamily = {
  regular: 'Helvetica',
  bold: 'Helvetica',
  light: 'Helvetica',
}

/**
 * ***************************
 * Font Scale   **************
 * ***************************
 */
const fontScale = {
  xs: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  base: {
    fontSize: '16px',
    lineHeight: '22px',
  },
  md: {
    fontSize: '18px',
    lineHeight: '26px',
  },
  lg: {
    fontSize: '20px',
    lineHeight: '26px',
  },
  xl: {
    fontSize: '26px',
    lineHeight: '30px',
  },
}

/**
 * ***************************
 * Dimension   ***************
 * ***************************
 */
const dimension = {
  mainContianerMaxWidth: '1214px',
  headerContainerMaxWidth: '1334px',
  headerHeight: '91px',
  searchBarHeight: '40px',
  headerAndSearchHeight: '131px',
  drawerWidth: '220px',
}

export {
  color,
  fontFamily,
  fontScale,
  dimension,
}