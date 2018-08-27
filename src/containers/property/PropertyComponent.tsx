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
import { IPropertyComponentState } from './IPropertyComponentState'
import { Property } from 'core/domain/properties'

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

const stateOptions = [
  {
    value: '',
    label: '',
  }
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
        ownerUserId: '',
        profileImage: '',
        showcaseImages: [],
        name: '',
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
      openBanner: false,
      banner: '',
    }

    // Binding functions to `this`
  }

  componentWillMount() {

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
    const { add } = this.props
    const { property } = this.state
    add!(property)
  }

  handleOpenBannerGallery = () => {
    this.setState({
      openBanner: true,
    })
  }

  /**
   * Close image gallery of banner
   */
  handleCloseBannerGallery = () => {
    this.setState({
      openBanner: false
    })
  }

  /**
   * Set banner image url
   */
  handleRequestSetBanner = (url: string) => {
    console.log('url ==>', url)
    this.setState({
      banner: url
    })
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, posts, classes } = this.props

    return (
      <div className="container grid">
        <div className={classes.leftSection}>
          <p className={cx('l-xl--secondary')}>Property's Profile</p>
          <div className={classes.imageContainer}>
            <img className="full-img" src="/images/Section3_image1.jpg" alt="Property Image" />
            <IconButton className={classes.editIcon} onClick={this.handleOpenBannerGallery}>
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
          >
            Edit/Add Photos &nbsp; +
          </Button>
        </div>
        
        <div className={classes.rightSection}>
          <div className="grid">
            <TextField
              id="name"
              label="Property’s name"
              handleChange={(value: string) => {this.handleChange('name', value)}}
            />
          </div>

          <div className="grid">
            <TextField
              id="address"
              label="Address"
              handleChange={(value: string) => {this.handleChange('address', value)}}
            />
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="city"
                label="City"
                handleChange={(value: string) => {this.handleChange('city', value)}}
              />
            </div>
            <div className="grid-cell">
              <Select
                id="state"
                label="Select State"
                options={stateOptions}
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

        {/* Image gallery for banner*/}
        <Dialog
          PaperProps={{ className: classes.fullPageXs }}
          open={this.state.openBanner}
          onClose={this.handleCloseBannerGallery}
        >
          <DialogTitle className={classes.dialogTitle}>
            <AppDialogTitle
              title={translate!('profile.chooseBanerDialogTitle')}
              onRequestClose={this.handleCloseBannerGallery}
            />
          </DialogTitle>
          <ImageGallery
            set={this.handleRequestSetBanner}
            close={this.handleCloseBannerGallery}
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
    add: (property: Property) => dispatch(propertyActions.dbAddProperty(userId, property)),
    update: (property: Property) => dispatch(propertyActions.dbUpdateProperty(userId, property)),
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
  // const { userId } = ownProps.match.params
  return {
    translate: getTranslate(state.get('locale')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(PropertyComponent as any) as any)
