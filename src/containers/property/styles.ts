import { buttons } from 'src/styles/inline'
import { color } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  ...buttons,

  leftSection: {
    width: 388,
    marginRight: 22,
  },

  rightSection: {
    flex: 1,
    paddingTop: '60px',
    paddingBottom: '70px',
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

  carouselContainer: {
    padding: 8,
    borderBottom: 'solid 1px #B9B9B9',
    marginBottom: 20,

    '& .slick-next, & .slick-prev': {
      width: '25px',
      height: '25px',
      fill: color['greyB9'],
    },

    '& .slick-next': {
      right: '-20px',
    },

    '& .slick-prev': {
      left: '-20px',
    },
  },

  itemImage: {
    height: '160px',
    width: 'calc(100% - 24px) !important',
    padding: '12px',

    '&:focus': {
      outline: 'none',
    },

    '& > img': {
      width: '100%',
      height: '100%',
      'object-fit': 'cover',
    }
  },

  saveButton: {
    ...buttons.plusButton,
    marginRight: '49px',

    '& > span > span': {
      display: 'flex',
    }
  },

  addPropertyButton: {
    ...buttons.plusButton,
    backgroundColor: color['greyD8'],
    color: color['primary-color'],
  }

})

export default styles
