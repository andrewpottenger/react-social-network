// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map, List as ImuList } from 'immutable'
import cx from 'classnames'

// - Import app components
import ProfileHeader from 'src/components/profileHeader'
import { Info, Neighbors } from 'src/components/profile'
import PostComponent from 'src/components/post'
import StreamComponent from 'containers/stream'

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
import styles from './styles'

/**
 * Component styles
 */
// const styles = (theme: any) => ({
//   property: {
//     display: 'flex',
//     maxWidth: '1217px',
//     margin: '0 auto',
//   },

//   sideContainer: {
//     width: '285px',
//     marginRight: 26,
//   },

//   mainContainer: {
//     flex: 1,
//   },

//   addButton: {
//     fontSize: '14px',
//     padding: '8px 24px',
//     marginBottom: '29px',
//     textTransform: 'capitalize',
//   },
// })

const propertyData = {
  image: 'images/Section3_image1.jpg',
  projects: [
    {
      image: 'images/Section3_image2.jpg',
      name: 'Kitchen',
      date: 'Start Date: 1/4/18',
      progress: 50,
    },
    {
      image: 'images/Section3_image3.jpg',
      name: 'Patio',
      date: 'Start Date: 6/12/17',
      progress: 100,
    }
  ]
}

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
          <div className="">
adsfa
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
          dsf
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
