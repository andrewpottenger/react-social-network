const styles = (theme: any) => ({
  card: {
    display: 'flex',
    height: '180px',

    [theme.breakpoints.up('sm')]: {
      height: '204px',
    },
  },
  cover: {
    flex: 2,
  },
  details: {
    flex: 3,
    position: 'relative',
    maxWidth: '169px',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 16px',

    [theme.breakpoints.up('sm')]: {
      padding: '34px 24px',
    },
  },

})

export default styles
