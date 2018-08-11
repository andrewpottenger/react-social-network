// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map } from 'immutable'

// - Material UI
import { grey } from 'material-ui/colors'
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

// - Import API

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { IInfoComponentProps } from './IInfoComponentProps'
import { IInfoComponentState } from './IInfoComponentState'

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
    marginLeft: '20px'
  },
  editButtonSmall: {
    marginLeft: '20px',
    color: 'white',
    fill: 'blue'
  },
  aboutButton: {
    color: 'white'
  },
  aboutButtonSmall: {
    color: 'black'
  }
}

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
      isSmall: false
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
    const { avatar, fullName, address1, address2, followerCount, translate, isAuthedUser, editProfileOpen } = this.props

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
          <p className="profileInfo__title">{this.props.fullName}</p>
          <div className="profileInfo__info">
            <img src="icons/icon-location.png" />
            <p className="">{address1}</p>
          </div>
          <div className="profileInfo__info">
            <img src="icons/icon-house.png" />
            <p className="">{address2}</p>
            <IconButton style={styles.iconButton}>
              <img className="profileInfo__iconButton-img" src="icons/icon-airbnb.png" />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <img className="profileInfo__iconButton-img" src="icons/icon-open-to-offers.png" alt="" />
            </IconButton>
          </div>

          <div className="profileInfo__info">
            <img src="icons/icon-follow.png" />
            <p className="">{followerCount} followers</p>
          </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(
  InfoComponent as any
)
