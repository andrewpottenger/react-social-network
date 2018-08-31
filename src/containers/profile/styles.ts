
const styles = (theme: any) => ({
  profile: {
    
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sideContainer: {
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '285px',
      marginRight: 26,
    },
  },

  mainContainer: {
    flex: 1,
  },

  addButton: {
    margin: '40px auto 29px',
    fontSize: '14px',
    padding: '8px 24px',
    textTransform: 'capitalize',

    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
  },
})

export default styles
