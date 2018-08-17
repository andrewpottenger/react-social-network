// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import ChevronLeft from 'material-ui-icons/ChevronLeft'
import ChevronRight from 'material-ui-icons/ChevronRight'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map, List as ImuList } from 'immutable'
import cx from 'classnames'
import Slider from 'react-slick'

// - Import app components
import ProfileHeader from 'src/components/profileHeader'
import { Info, Neighbors } from 'src/components/profile'
import PostComponent from 'src/components/post'
import StreamComponent from 'containers/stream'
import { TextField, Checkbox } from 'components/widgets'

// - Import API
import * as PostAPI from 'src/api/PostAPI'

// - Import domain
import { Post } from 'src/core/domain/posts'

// - Import actions
import * as postActions from 'src/store/actions/postActions'
import * as userActions from 'src/store/actions/userActions'
import * as globalActions from 'src/store/actions/globalActions'
import { IPropertyComponentProps } from './IPropertyComponentProps'
import { IPropertyComponentState } from './IPropertyComponentState'
import { Profile } from 'core/domain/users'

// Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    this.state = {}

    // Binding functions to `this`
  }

  componentWillMount() {

  }

  editPhoto = () => {

  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { loadPosts, hasMorePosts, translate, posts, classes } = this.props

    return (
      <div className="container grid">
        <div className={classes.leftSection}>
          <p className={cx('l-xl--secondary')}>Property's Profile</p>
          <div className={classes.imageContainer}>
            <img className="full-img" src="/images/Section3_image1.jpg" alt="Property Image" />
            <IconButton className={classes.editIcon}>
              <img className="full-img" src="/icons/icon-edit.png" />
            </IconButton>
          </div>
          <div className={classes.carouselContainer}>
            <Slider {...settings}>
              {
                photos.map((item: string, index: number) => (
                  <div className={classes.itemImage}>
                    <img key={`property-photo-${index.toString()}`} src={item} alt="Slider Image" />
                  </div>
                ))
              }
            </Slider>
          </div>
          <Button
            variant="flat"
            onClick={this.editPhoto}
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
              handleChange={(value: string) => {}}
            />
          </div>

          <div className="grid">
            <TextField
              id="address"
              label="Address"
              handleChange={(value: string) => {}}
            />
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="city"
                label="City"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="state"
                label="Select State"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="zip"
                label="Zip"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="name"
                label="Location"
                handleChange={(value: string) => {}}
              />
            </div>
          </div>
          
          <div className="grid">
            <TextField
              id="aboutHouse"
              label="Favorite things about the house"
              handleChange={(value: string) => {}}
            />
          </div>

          <div className="grid">
            <TextField
              id="aboutNeighborhood"
              label="Favorite things about the neighborhood"
              handleChange={(value: string) => {}}
            />
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="square"
                label="Square feet"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="beds"
                label="Beds"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="baths"
                label="Baths"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="yearPurchased"
                label="Year Purchased"
                handleChange={(value: string) => {}}
              />
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="schools"
                label="Nearby Schools"
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <div className="grid">
                <div className="grid-cell">
                  <TextField
                    id="lotSize"
                    label="Lot size"
                    handleChange={(value: string) => {}}
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
                handleChange={(value: string) => {}}
              />
            </div>
            <div className="grid-cell">
              <TextField
                id="cons"
                label="Cons"
                multiline
                handleChange={(value: string) => {}}
              />
            </div>
          </div>

          <div className="grid grid__fit">
            <div className="grid-cell">
              <TextField
                id="pros"
                label=""                
                handleChange={(value: string) => {}}
              />
            </div>
          </div>

          <div className="grid grid__gutters grid__fit">
            <div className="grid-cell">
              <TextField
                id="change"
                label="Changes/Upgrades"
                multiline
                handleChange={(value: string) => {}}
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
              onClick={this.editPhoto}
              className={classes.saveButton}
            >
              <span>Save &nbsp; &nbsp;</span> <span><img src="/icons/icon-cloud-down.png"/></span>
            </Button>

            <Button
              variant="flat"
              onClick={this.editPhoto}
              className={classes.addPropertyButton}
            >
              Add Another Property &nbsp; +
            </Button>
          </div>

        </div>
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
