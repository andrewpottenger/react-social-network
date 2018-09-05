// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map } from 'immutable'
import cx from 'classnames'

// - Material UI
import { grey } from 'material-ui/colors'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import EventListener, { withOptions } from 'react-event-listener'
import { Parallax, Background } from 'react-parallax'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'

// - Import app components
import ImgCover from 'components/imgCover'
import EditProfile from 'components/editProfile'
import UserAvatar from 'components/userAvatar'
import { EditIcon } from 'components/SvgIcons'

// - Import API

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { IInfoComponentProps } from './IInfoComponentProps'
import { IInfoComponentState } from './IInfoComponentState'

// - Import styles
import styles from './styles'

/**
 * Create component class
 */
export class InfoComponent extends Component<
  IInfoComponentProps,
  IInfoComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IInfoComponentProps) {
    super(props)

    /**
     * Defaul state
     */
    this.state = {
      /**
       * If it's true , the window is in small size
       */
      isSmall: false,
    }

    // Binding functions to `this`
  }
  /**
   * Handle resize event for window to change sidebar status
   * @param  {event} evt is the event is passed by winodw resize event
   */
  handleResize = () => {
    // Set initial state
    let width = window.innerWidth

    if (width > 900) {
      this.setState({
        isSmall: false
      })
    } else {
      this.setState({
        isSmall: true
      })
    }
  }

  componentDidMount() {
    this.handleResize()
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { avatar, fullName, address, companyName, followerCount, classes, translate, isAuthedUser, editProfileOpen } = this.props

    return (
      <div>
        <div className="profileInfo">
          <div className="profileInfo__avatar">
            <UserAvatar
              fullName={fullName || ' '}
              fileName={avatar}
              size={152}
            />
          </div>
          
          <p className="profileInfo__title">{this.props.fullName || 'NA'}</p>
          <div className="profileInfo__info">
            <img src="icons/icon-location.png" />
            <p className="">{address || 'NA'}</p>
          </div>
          <div className="profileInfo__info">
            <img src="icons/icon-house.png" />
            <p className="">{companyName || 'NA'}</p>
            <IconButton className={classes.iconButton}>
              <img className="profileInfo__iconButton-img" src="icons/icon-airbnb.png" />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <img className="profileInfo__iconButton-img" src="icons/icon-open-to-offers.png" alt="" />
            </IconButton>
          </div>

          <div className="profileInfo__info">
            <img src="icons/icon-follow.png" />
            <p className="">{followerCount || 0} followers</p>
          </div>

          {isAuthedUser ?
            <IconButton className={classes.editButton}>
              <div className={classes.editIcon} dangerouslySetInnerHTML={{__html: EditIcon.element.innerHTML}}/>
            </IconButton> :
            <div className="profile__header-overlay">
              <Button className={cx(classes.headerButton, classes.pinkButton)} variant="raised" onClick={this.props.openEditor}>
                Follow
              </Button>
              <Button className={classes.headerButton} variant="raised" onClick={this.props.openEditor}>
                Message
              </Button>
            </div>
          }

          {/* <div className="right">
            {isAuthedUser ? (
              <div
                style={
                  this.state.isSmall
                    ? styles.editButtonSmall
                    : styles.editButton
                }
              >
                <Button variant="raised" onClick={this.props.openEditor}>
                  {translate!('profile.editProfileButton')}
                </Button>
              </div>
            ) : (
              ''
            )}
          </div> */}
        </div>
        
      </div>
        // {isAuthedUser && editProfileOpen ? (
        //   <EditProfile
        //     avatar={this.props.avatar}
        //     banner={this.props.banner}
        //     fullName={this.props.fullName}
        //   />
        // ) : (
        //   ''
        // )}
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
  ownProps: IInfoComponentProps
) => {
  return {
    openEditor: () => dispatch(userActions.openEditProfile())
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
  ownProps: IInfoComponentProps
) => {
  return {
    translate: getTranslate(state.get('locale')),
    editProfileOpen: state.getIn(['user', 'openEditProfile'])
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(InfoComponent as any) as any)