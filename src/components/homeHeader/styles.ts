import { fontScale, color, dimension } from 'src/styles/inline/variables'
import { layouts } from 'src/styles/inline'

const styles = (theme: any) => ({
  root: {
    backgroundColor: color['secondary-color'],

    // [theme.breakpoints.up('sm')]: {
    //   padding: '34px 24px',
    // },
  },

  toolBar: {
    ...layouts.headerContainer,
    minHeight: dimension.headerHeight,
    minWidth: '320px',
    maxWidth: '600px',
    paddingLeft: '12px',
    paddingRight: '12px',

    [theme.breakpoints.up('sm')]: {
      minWidth: '572px',
      maxWidth: '960px',
    },

    [theme.breakpoints.up('md')]: {
      paddingLeft: '24px',
      paddingRight: '24px',
      minWidth: '918px',
      maxWidth: '1280px',
    },

    [theme.breakpoints.up('lg')]: {
      minWidth: '1232px',
      maxWidth: '1334px',
    },

  },

  searchContainer: {
    position: 'fixed',
    height: dimension.searchBarHeight,
    left: 0,
    top: 91,
    margin: 0,
    width: '100%',
    backgroundColor: color['secondary-color'],

    [theme.breakpoints.up('md')]: {
      width: '236px',
      marginLeft: '70px',
      position: 'unset',
    },
  },

  navLinks: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  badge: {
    ...fontScale.sm,

    '& > span': {
      right: '-2px',
      top: '-2px',
      color: color['white'],
      backgroundColor: color['primary-color'],
    }
  },

  avatarStyle: {
    margin: 5,
    cursor: 'pointer'
  }
})

export default styles
