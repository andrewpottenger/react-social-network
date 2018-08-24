import { color, fontScale, fontFamily } from 'src/styles/inline/variables'

const styles = {
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
}

export default styles
