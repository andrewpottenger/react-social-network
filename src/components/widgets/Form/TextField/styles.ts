import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  textField: {
    width: '100%',

    '& label': {
      ...fontScale.base,
      color: color['primary-color'],
      transform: 'scale(1)',
      marginBottom: '15px',
    },

    '& input, & > div > div': {
      padding: '11px 10px 10px',
      ...fontScale.base,
      color: color['grey'],
    },

    '& > div': {
      marginTop: '30px',
      border: 'solid 1px',
      borderColor: color['greyB9'],
    },

    '& > div:before, & > div:after': {
      height: '0px !important',
    },
  },

  multilineTextField: {
    '& > div': {
      padding: '11px 10px 10px',
    },
  },
})

export default styles
