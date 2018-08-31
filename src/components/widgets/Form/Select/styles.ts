import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  textField: {
    width: '100%',
    minWidth: '150px',

    '& label': {
      ...fontScale.base,
      color: color['primary-color'],
      transform: 'scale(1)',
      marginBottom: '15px',
    },

    '& > div': {
      marginTop: '30px',
      border: 'solid 1px',
      borderColor: color['greyB9'],
    },

    '& select': {
      padding: '12px 10px 9px 10px',
      ...fontScale.base,
      color: color['grey'],

      '&:focus': {
        background: 'transparent',
      },
    },

    '& > svg': {
      right: '5px',
    },

    '& > div:before, & > div:after': {
      height: '0px !important',
    },
  },

})

export default styles
