// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import ChevronLeft from 'material-ui-icons/ChevronLeft'
import ChevronRight from 'material-ui-icons/ChevronRight'
import { getTranslate } from 'react-localize-redux'
import { Map } from 'immutable'
import cx from 'classnames'
import Slider from 'react-slick'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

// - Import app components
import { TextField, Select, Checkbox } from 'components/widgets'
import ImageGallery from 'components/imageGallery'
import AppDialogTitle from 'layouts/dialogTitle'

// - Import API
// - Import domain

// - Import actions
import * as propertyActions from 'store/actions/propertyActions'
import { IPropertyComponentProps } from './IPropertyComponentProps'
import { IPropertyComponentState, GalleryType } from './IPropertyComponentState'
import { Property } from 'core/domain/properties'

// - Data
import { usState } from './data'

// - Styles
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import styles from './styles'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <ChevronRight style={{fill: '#B9B9B9'}} />,
  prevArrow: <ChevronLeft style={{fill: '#B9B9B9'}} />,
}

const photos = [
  '/images/Section3_image2.jpg',
  '/images/Section3_image3.jpg',
  '/images/Section3_image2.jpg',
  '/images/Section3_image3.jpg',
]

/**
 * Create component class
 */
export class PropertyComponent extends Component<
  IPropertyComponentProps,
  IPropertyComponentState
> {
  static propTypes = {}

  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IPropertyComponentProps) {
    super(props)

    // Defaul state
    this.state = {
      property: {
        id: '',
        ownerUserId: '',
        profileImage: '',
        showcaseImages: [],
        name: 'adsfas',
        address: '',
        city: '',
        state: '',
        zip: '',
        location: '',
        aboutHouse: '',
        aboutNeighborhood: '',
        square: '',
        beds: '',
        baths: '',
        yearPurchased: '',
        nearBySchools: '',
        lotSize: '',
        pros: '',
        cons: '',
        visibleToAll: '',
        changes: '',
      },
      openImageGallery: false,
      galleryType: 'ProfileImageGallery',
    }

    // Binding functions to `this`
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { propertyId, properties } = this.props
    console.log('properties ==> ', properties)
    if (propertyId) {
      properties.forEach((property: Property) => {
        if (property.id === propertyId ) {
          this.setState({property})
        }
      })
    }
  }

  handleChange = (name: string, value: string) => {
    const { property } = this.state
    property[name] = value
    this.setState({proeprty : property} as any)

    // this.setState({
    //   [name]: value,
    // } as Pick<IPropertyComponentState, keyof IPropertyComponentState>)
  }

  saveProperty = () => {
    const { addProperty } = this.props
    const { property } = this.state
    addProperty!(property)
  }

  handleOpenImageGallery = (galleryType: GalleryType) => {
    this.setState({
      openImageGallery: true,
      galleryType,
    })
  }

  /**
   * Close image gallery of banner
   */
  handleCloseImageGallery = () => {
    this.setState({
      openImageGallery: false,
      galleryType: 'ProfileImageGallery',
    })
  }

  /**
   * Set image url
   */
  handleRequestSetImage = (url: string) => {
    const { galleryType, property } = this.state
    console.log('url ==>', url)
    if (galleryType === 'ProfileImageGallery') {
      property.profileImage = url
      this.setState({property})
    } else if (galleryType === 'ShowcaseImagesGallery') {
      const { showcaseImages } = property
      let duplicated = false
      showcaseImages.forEach((item: string) => {
        if (item === url) {
          duplicated = true
        }
      })
      if (!duplicated) {
        showcaseImages.push(url)
        const newProperty = {
          ...property,
          showcaseImages,
        }
        this.setState({property: newProperty})
      }
    }
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, classes } = this.props
    const { galleryType, property } = this.state

    return (
      <div className="container grid">
        <div className={classes.leftSection}>
          <p className={cx('l-xl--secondary')}>Property's Profile</p>
          <div className={classes.imageContainer}>
            <img className="full-img" src="/images/Section3_image1.jpg" alt="Property Image" />
            <IconButton className={classes.editIcon} onClick={() => this.handleOpenImageGallery('ProfileImageGallery')}>
              <img className="full-img" src="/icons/icon-edit.png" />
            </IconButton>
          </div>
          <div className={classes.carouselContainer}>
            <Slider {...settings}>
              {
                photos.map((item: string, index: number) => (
                  <div className={classes.itemImage} key={`property-photo-${index.toString()}`} >
                    <img src={item} alt="Slider Image" />
                  </div>
                ))
              }
            </Slider>
          </div>
          <Button
            variant="flat"
            className={classes.plusButton}
            onClick={() => this.handleOpenImageGallery('ShowcaseImagesGallery')}
          >
            Edit/Add Photos &nbsp; +
          </Button>
        </div>
        
        <div className={classes.rightSection}>
          <div className="grid">
            <TextField
              id="name"
              label="Property’s name"
              defaultValue={property.name}
              handleChange={(value: string) => {this.handleChange('name', value)}}
            />
          </div>

          <div className="grid">
            <TextField
              id="address"
              label="Address"
              defaultValue={property.address}
              handleChange={(value: string) => {this.handleChange('address', value)}}
            />
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="city"
                label="City"
                defaultValue={property.city}
                handleChange={(value: string) => {this.handleChange('city', value)}}
              />
            </div>
            <div className="grid-cell">
              <Select
                id="state"
                label="Select State"
                options={usState}
                handleChange={(value: string) => {this.handleChange('state', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="zip"
                label="Zip"
                handleChange={(value: string) => {this.handleChange('zip', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="location"
                label="Location"
                handleChange={(value: string) => {this.handleChange('location', value)}}
              />
            </div>
          </div>
          
          <div className="grid">
            <TextField
              id="aboutHouse"
              label="Favorite things about the house"
              handleChange={(value: string) => {this.handleChange('aboutHouse', value)}}
            />
          </div>

          <div className="grid">
            <TextField
              id="aboutNeighborhood"
              label="Favorite things about the neighborhood"
              handleChange={(value: string) => {this.handleChange('aboutNeighborhood', value)}}
            />
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="square"
                label="Square feet"
                handleChange={(value: string) => {this.handleChange('square', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="beds"
                label="Beds"
                handleChange={(value: string) => {this.handleChange('beds', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="baths"
                label="Baths"
                handleChange={(value: string) => {this.handleChange('baths', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="yearPurchased"
                label="Year Purchased"
                handleChange={(value: string) => {this.handleChange('yearPurchased', value)}}
              />
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="nearBySchools"
                label="Nearby Schools"
                handleChange={(value: string) => {this.handleChange('nearBySchools', value)}}
              />
            </div>
            <div className="grid-cell">
              <div className="grid">
                <div className="grid-cell">
                  <TextField
                    id="lotSize"
                    label="Lot size"
                    handleChange={(value: string) => {this.handleChange('lotSize', value)}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="pros"
                label="Pros"
                multiline
                handleChange={(value: string) => {this.handleChange('pros', value)}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="cons"
                label="Cons"
                multiline
                handleChange={(value: string) => {this.handleChange('cons', value)}}
              />
            </div>
          </div>

          <div className="grid grid__fit">
            <div className="grid-cell">
              <TextField
                id="visibleToAll"
                label=""                
                handleChange={(value: string) => {this.handleChange('visibleToAll', value)}}
              />
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="changes"
                label="Changes/Upgrades"
                multiline
                handleChange={(value: string) => {this.handleChange('changes', value)}}
              />
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <Checkbox
                id="isVisible"
                label="Make my changes visible on my network’s News Feed"
                handleChange={(value: boolean) => {}}
              />
            </div>
            <div className="grid-cell">
              <div className="grid">
                <div className="grid-cell">
                  <Checkbox
                    id="isOpen"
                    label="Open to offers "
                    handleChange={(value: boolean) => {}}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid" style={{marginTop: '40px'}}>
            <Button
              variant="flat"
              className={classes.saveButton}
              onClick={this.saveProperty}
            >
              <span>Save &nbsp; &nbsp;</span> <span><img src="/icons/icon-cloud-down.png"/></span>
            </Button>

            <Button
              variant="flat"
              className={classes.addPropertyButton}
            >
              Add Another Property &nbsp; +
            </Button>
          </div>

        </div>

        <Dialog
          PaperProps={{ className: classes.fullPageXs }}
          open={this.state.openImageGallery}
          onClose={this.handleCloseImageGallery}
        >
          <DialogTitle className={classes.dialogTitle}>
            <AppDialogTitle
              title={translate!(galleryType === 'ProfileImageGallery' ? 'property.chooseProfileImageDialogTitle' : 'property.chooseShowcaseImagesDialogTitle')}
              onRequestClose={this.handleCloseImageGallery}
            />
          </DialogTitle>
          <ImageGallery
            set={(url: string) => this.handleRequestSetImage(url)}
            close={this.handleCloseImageGallery}
          />
        </Dialog>
      </div>
    )
  }
}

/**
 * Map dispatch to props
 * @param  {func} dispatch is the function to dispatch action to reducers
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapDispatchToProps = (
  dispatch: any,
  ownProps: IPropertyComponentProps
) => {
  const { userId } = ownProps.match.params
  return {
    getProperty: () => dispatch(propertyActions.dbGetProperty()),
    addProperty: (property: Property) => dispatch(propertyActions.dbAddProperty(property)),
    updateProperty: (property: Property) => dispatch(propertyActions.dbUpdateProperty(property)),
  }
}

/**
 * Map state to props
 * @param  {object} state is the obeject from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapStateToProps = (
  state: Map<string, any>,
  ownProps: IPropertyComponentProps
) => {
  const { propertyId } = ownProps.match.params
  const properties = state.getIn(['property', 'properties'])
  console.log('ownProps.match.params ==>', ownProps.match.params)
  return {
    propertyId,
    properties,
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(PropertyComponent as any) as any)
