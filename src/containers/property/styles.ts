import { buttons } from 'src/styles/inline'

const styles = (theme: any) => ({
  ...buttons,

  leftSection: {
    width: 388,
    marginRight: 22,
  },

  rightSection: {
    flex: 1,
  },

  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 457,
  },

  editIcon: {
    position: 'absolute',
    top: 7,
    right: 13,
    width: 23,
    height: 23,
  },

})

export default styles
