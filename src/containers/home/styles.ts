import { dimension } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  root: {
    width: '100%',
    marginTop: dimension.headerHeight,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    maxWidth: dimension.drawerWidth,
    width: dimension.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: dimension.drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  drawerPaperLarge: {
    width: dimension.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: dimension.drawerWidth,
      height: '100%'
    },
    top: 70,
    backgroundColor: '#fafafa',
    borderRight: 0
  },
  menu: {
    height: '100%'
  },
  content: {
    backgroundColor: 'transparent',
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: 'calc(100% - 56px)',
    marginTop: 34,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 44
    }
  },
  'content-left': {
    marginLeft: 0
  },
  'content-right': {
    marginRight: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: dimension.drawerWidth
    }
  },
  'contentShift-right': {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: dimension.drawerWidth
    }
  },

  dropDown: {
    top: dimension.headerHeight,
    
    '& > ul': {
      padding: 0,
      width: '170px',
    }
  
    // li {
    //   padding-left: 28px !important;;
    //   &:hover {
    //     background-color: #9b9b9b !important;
    //   }
    // }
  },
})

export default styles
