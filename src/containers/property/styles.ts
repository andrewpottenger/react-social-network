import { buttons } from 'src/styles/inline'
import { color } from 'src/styles/inline/variables'

const styles = (theme: any) => ({
  ...buttons,

  leftSection: {
    width: '100%',
    // marginRight: 18,

    [theme.breakpoints.up('md')]: {
      width: 388,
      marginRight: 22,
    },
  },

  addPhotoButtonSpace: {
    marginTop: 20,
    marginBottom: 20,
  },

  rightSection: {
    flex: 1,
    paddingTop: '60px',
    paddingBottom: '70px',
    // marginRight: 18,

    [theme.breakpoints.up('md')]: {
      // marginRight: 0,
    },
  },

  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    height: '300px',
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 'unset',
      height: 457,
    },
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

  checkBoxContainer: {
    display: 'block',

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },

  addPhotoButton: {
    ...buttons.plusButton,
    minWidth: '200px',
  },

  saveButton: {
    ...buttons.plusButton,
    marginRight: '49px',

    '& > span > span': {
      display: 'flex',
    },

    [theme.breakpoints.down('xs')]: {
      width: '300px',
      margin: '0 auto 20px',
    }
  },

  addPropertyButton: {
    ...buttons.plusButton,
    backgroundColor: color['greyD8'],
    color: color['primary-color'],

    [theme.breakpoints.down('xs')]: {
      width: '300px',
      margin: '0 auto',
    }
  },

  fullPageXs: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      margin: 0
    }
  },

})

export default styles
