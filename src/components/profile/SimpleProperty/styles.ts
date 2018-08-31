const styles = (theme: any) => ({
  card: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      height: '537px',
      maxWidth: '906px',
    },
  },

  cover: {
    height: '200px',
    flex: 2,
    
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
    },
  },

  details: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    padding: '27px 20px 5px 20px',
    backgroundColor: '#E7E7E7',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '474px',
    },
  },

  newButton: {
    padding: 0,
    fontSize: '14px',
    color: '#4A4A4A',
    textTransform: 'capitalize',
  },

  moreButton: {
    padding: 0,
    minWidth: 'unset',
    fontSize: '14px',
    textTransform: 'lowercase',
  }
})

export default styles
