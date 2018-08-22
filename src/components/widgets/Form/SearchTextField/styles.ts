import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  textField: {
    width: '100%',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.4)',

    '& > div': {
      marginTop: 0,
    },

    '& input': {
      ...fontScale.sm,
      fontFamily: fontFamily.regular,
      color: color['white'],
      padding: '10px 10px 10px 2px',
    },

    '& > div:before, & > div:after': {
      height: '0px !important',
    },

  },
  
  adornment: {
    marginTop: '6px',
    marginLeft: '10px',
  },

  searchIcon: {
    fill: color['white'],
  },
})

export default styles
