import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  avatar: {
    border: '2px solid rgb(255, 255, 255)',
  },

  iconButton: {
    fill: 'rgb(255, 255, 255)',
    height: '33px',
    width: '33px',
    marginRight: '7px',
  },

  editButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  headerButton: {
    flex: 1,
    height: 35,
    ...fontScale.sm,
    fontFamily: fontFamily.light,
    backgroundColor: color['greyB9'],
    color: color['white'],
    textTransform: 'capitalize',
    borderRadius: 0,
  },

  pinkButton: {
    backgroundColor: color['primary-color-light'],
  },

  editButtonSmall: {
    marginLeft: '20px',
    color: 'white',
    fill: 'blue'
  },

  editIcon: {
    width: '20px',
    '& svg': {
      fill: color['primary-color'],
    },
  },

  aboutButton: {
    color: 'white'
  },
  aboutButtonSmall: {
    color: 'black'
  }
})

export default styles
