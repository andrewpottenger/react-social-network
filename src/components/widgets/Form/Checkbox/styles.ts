import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  checkBox: {
    width: '100%',

    '& > span svg': {
      fill: color['greyB9'],
    },

    '& > span:nth-child(2)': {
      color: color['primary-color'],
    }
  },

})

export default styles
