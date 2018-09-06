import { fontScale, color, dimension } from 'src/styles/inline/variables'
import { layouts } from 'src/styles/inline'

const styles = (theme: any) => ({
  menuRoot: {

    '& > div': {
      top: '91px !important',
      marginLeft: '20px',

      [theme.breakpoints.down('xs')]: {
        left: '0 !important',
        right: '0 !important',
        maxWidth: 'unset',
        marginLeft: 0,
      },
    },
    
    '& ul': {
      padding: 0,
      width: '200px',

      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  },

  root: {
    backgroundColor: color['secondary-color'],
  },

  toolBar: {
    ...layouts.headerContainer,
    width: 'calc(100% - 24px)',
    minHeight: dimension.headerHeight,
    maxWidth: '600px',
    paddingLeft: '12px',
    paddingRight: '12px',

    [theme.breakpoints.up('sm')]: {
      minWidth: '572px',
      maxWidth: '960px',
    },

    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 48px)',
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

  headerAvatarContainer: {
    marginLeft: 15,

    [theme.breakpoints.up('sm')]: {
      marginLeft: 40,
    },

    [theme.breakpoints.up('md')]: {
      marginLeft: 70,
    },
  },

  avatarStyle: {
    margin: 5,
    cursor: 'pointer'
  },

  headerNavItem: {
    backgroundColor: color['primary-color-light'],
    color: 'white',
    ...fontScale.sm,
  },

  headerNavItemSmall: {
    backgroundColor: color['primary-color-light'],
    '& a': {
      color: 'white',
      ...fontScale.xs,
    }
  },

  activeNavItem: {
    backgroundColor: color['grey9B'],
    color: 'white',
    ...fontScale.sm,
  },

  navItem: {
    backgroundColor: 'white',
    color: color['grey4A'],
    ...fontScale.sm,
  },
  
})

export default styles
