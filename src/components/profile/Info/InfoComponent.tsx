// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map, List as ImuList } from 'immutable'
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
import StringAPI from 'api/StringAPI'

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import * as circleActions from 'store/actions/circleActions'
import { IInfoComponentProps } from './IInfoComponentProps'
import { IInfoComponentState } from './IInfoComponentState'

// - Import Domain
import { UserTie } from 'core/domain/circles'
import { ServerRequestType } from 'constants/serverRequestType'
import { ServerRequestStatusType } from 'store/actions/serverRequestStatusType'

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
      isSmall: false,
      editProfileOpen: false,
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
    const { loadCircles, getUserTies, getFollowers, userId } = this.props
    this.handleResize()
    loadCircles!(userId)
    getUserTies!(userId)
    getFollowers!(userId)
  }

  /**
   * Handle follow user
   */
  onFollowUser = (event: any) => {
    // This prevents ghost click
    event.preventDefault()
    const {
      isFollowed,
      followUser,
      getFollowers,
      followingCircle,
      userId,
      followRequest,
      avatar,
      fullName
    } = this.props

    if (
      followRequest &&
      followRequest.status === ServerRequestStatusType.Sent
    ) {
      return
    }

    if (!this.props.followingCircle) {
      this.props.createCircle!('Following', () => {
        followUser!(this.props.followingCircle!.get('id'), { avatar, userId, fullName }, () => {
          getFollowers!(userId)
        })
      })
    } else {
      if (!isFollowed) {
        followUser!(followingCircle!.get('id'), { avatar, userId, fullName }, () => {
          getFollowers!(userId)
        })
      } else {
        // this.onRequestOpenAddCircle()
      }
    }

  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { avatar, fullName, address, companyName, followerCount, classes, translate, isAuthedUser } = this.props
    const { editProfileOpen } = this.state
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
            <IconButton className={classes.editButton} onClick={() => this.setState({editProfileOpen: true})}>
              <div className={classes.editIcon} dangerouslySetInnerHTML={{__html: EditIcon.element.innerHTML}}/>
            </IconButton> :
            <div className="profileInfo__header-overlay">
              <Button className={cx(classes.headerButton, classes.pinkButton)} variant="flat" onClick={this.onFollowUser}>
                Follow
              </Button>
              <Button className={classes.headerButton} variant="flat" onClick={() => {}}>
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

        {
          isAuthedUser && editProfileOpen &&
            <EditProfile
              avatar={avatar}
              fullName={fullName}
              open={editProfileOpen}
              onRequestClose={() => this.setState({editProfileOpen: false})}
            />
        }
        
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
  ownProps: IInfoComponentProps
) => {
  return {
    openEditor: () => dispatch(userActions.openEditProfile()),
    loadCircles: (userId: string) => dispatch(circleActions.dbGetCirclesByUserId(userId)),
    getUserTies: (userId: string) => dispatch(circleActions.dbGetUserTiesByUserId(userId)),
    getFollowers: (userId: string) => dispatch(circleActions.dbGetFollowersByUserId(userId)),
    createCircle: (name: string, callback: Function) => dispatch(circleActions.dbAddCircle(name, callback)),
    followUser: (circleId: string, userFollowing: UserTie, callback: Function) =>
      dispatch(circleActions.dbFollowUser(circleId, userFollowing, callback)),
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

  const circles: Map<string, Map<string, any>> = state.getIn(
    ['circle', 'circleList'],
    {}
  )

  const userBelongCircles: ImuList<any> = state.getIn(
    ['circle', 'userTies', ownProps.userId, 'circleIdList'],
    ImuList()
  )

  const isFollowed = userBelongCircles.count() > 0
  const followingCircle = circles
    .filter(
      followingCircle =>
        followingCircle!.get('isSystem') === false &&
        followingCircle!.get('name') === `Following`
    )
    .toArray()[0]
  const followRequestId = StringAPI.createServerRequestId(
    ServerRequestType.CircleFollowUser,
    ownProps.userId
  )
  const followRequest = state.getIn(['server', 'request', followRequestId])

  return {
    translate: getTranslate(state.get('locale')),
    isFollowed,
    followingCircle,
    followRequest,
    // editProfileOpen: state.getIn(['user', 'openEditProfile'])
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(InfoComponent as any) as any)