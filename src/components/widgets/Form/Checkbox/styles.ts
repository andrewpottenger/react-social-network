import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  checkBox: {
    width: '100%',

    '& > span svg': {
      fill: color['grey-dark-border'],
    },

    '& > span:nth-child(2)': {
      color: color['primary-color'],
    }
  },

})

export default styles
