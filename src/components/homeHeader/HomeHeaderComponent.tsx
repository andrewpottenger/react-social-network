// - Import react components
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { Map } from 'immutable'
import cx from 'classnames'

// - Material UI
import SvgDehaze from 'material-ui-icons/Dehaze'
import { grey, blue } from 'material-ui/colors'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import SvgHome from 'material-ui-icons/Home'
import SvgFeedback from 'material-ui-icons/Feedback'
import SvgExplore from 'material-ui-icons/Explore'
import SvgSettings from 'material-ui-icons/Settings'
import SvgAccountCircle from 'material-ui-icons/AccountCircle'
import SvgPeople from 'material-ui-icons/People'
import SvgKeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import Popover from 'material-ui/Popover'
import AppBar from 'material-ui/AppBar'
import Menu, { MenuList, MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import MailOutline from 'material-ui-icons/MailOutline'
import Tooltip from 'material-ui/Tooltip'
import Badge from 'material-ui/Badge'
import Typography from 'material-ui/Typography'
import { Manager, Target, Popper } from 'react-popper'
import { withStyles } from 'material-ui/styles'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import config from 'src/config'

// - Import components
import UserAvatarComponent from 'components/userAvatar'
import Notify from 'components/notify'
import { SearchTextField } from 'components/widgets/Form'

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import { authorizeActions } from 'store/actions'
import { IHomeHeaderComponentProps } from './IHomeHeaderComponentProps'
import { IHomeHeaderComponentState, ViewSizeType } from './IHomeHeaderComponentState'

// - Import styles
import styles from './styles'

// - Create HomeHeader component class
export class HomeHeaderComponent extends Component<
  IHomeHeaderComponentProps,
  IHomeHeaderComponentState
> {
  styles = {

  }

  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IHomeHeaderComponentProps) {
    super(props)

    // Default state
    this.state = {
      /**
       * User avatar popover is open if true
       */
      openAvatarMenu: false,
      /**
       * Show header title or not (true/false)
       */
      showTitle: true,
      /**
       * If true notification menu will be open
       */
      openNotifyMenu: false,
      /**
       * If true notification menu will be open
       */
      // viewSize: ,
      viewSize: 'lg',
    }

    // Binding functions to `this`
    this.onToggleSidebar = this.onToggleSidebar.bind(this)
    this.handleCloseNotify = this.handleCloseNotify.bind(this)
  }

  /**
   * Handle close notification menu
   *
   *
   * @memberof HomeHeader
   */
  handleCloseNotify = () => {
    this.setState({
      openNotifyMenu: false
    })
  }

  // On click toggle sidebar
  onToggleSidebar = () => {
    // const { onToggleDrawer } = this.props
    // onToggleDrawer()
  }

  /**
   * Handle notification touch
   *
   *
   * @memberof HomeHeader
   */
  handleNotifyTouchTap = (event: any) => {
    // This prevents ghost click.
    event.preventDefault()

    this.setState({
      openNotifyMenu: true,
      anchorEl: event.currentTarget
    })
  }

  /**
   * Handle touch on user avatar for popover
   *
   *
   * @memberof HomeHeader
   */
  handleAvatarTouchTap = (event: any) => {
    this.setState({
      openAvatarMenu: true,
      anchorEl: event.currentTarget
    })
  }

  /**
   * Handle logout user
   *
   *
   * @memberof HomeHeader
   */
  handleLogout = () => {
    this.props.logout!()
  }

  /**
   * Handle close popover
   *
   *
   * @memberof HomeHeader
   */
  handleRequestClose = () => {
    this.setState({
      openAvatarMenu: false,
      anchorEl: null
    })
  }

  /**
   * Handle resize event for window to manipulate home header status
   * @param  {event} evt is the event is passed by winodw resize event
   */
  handleResize = (event: any) => {
    // const { drawerStatus } = this.props
    // Set initial state
    let width = window.innerWidth
    // if (width >= 600 && !drawerStatus) {
    //   this.onToggleSidebar()
    // } else if (width < 600) {

    // }
    let viewSize: ViewSizeType = 'lg'
    if (width > 1200) {
      viewSize = 'lg'
    } else if (width > 600) {
      viewSize = 'md'
    } else {
      viewSize = 'xs'
    }

    this.setState({viewSize})
    // this.setState({showOnlyIcon: width < 1200})
  }

  componentDidMount() {
    this.handleResize(null)
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  // Render app DOM component
  render() {
    const { classes, translate, theme, userId } = this.props
    const { viewSize } = this.state
    // const anchor = theme.direction === 'rtl' ? 'right' : 'left'
    return (
      <AppBar position="fixed" className={classes.root} >
        <Toolbar className={cx(classes.toolBar)}>
          {/* Left side */}
          <a href="/">
            <img src="/images/backyardelogo.png" width="120" alt="Backyarde" />
          </a>
          {/* <div className="homeHeader__title-root">
            <Hidden smDown>
              <div
                className={classNames({
                  'homeHeader__title-left': anchor === 'left',
                  'homeHeader__title-right': anchor === 'right'
                })}
              >
                {this.props.title}
              </div>
            </Hidden>
          </div> */}
          <div className={classes.searchContainer}>
            <SearchTextField
              id="change"
              label=""
              handleChange={(value: string) => {}}
            />
          </div>

          {/* Notification */}
          <div className="homeHeader__right">
            <nav className={cx('nav-links', classes.navLinks)}>
              <NavLink to="/find-a-property">
                <MenuItem>
                  {
                    viewSize !== 'lg' ?
                      <ListItemIcon>
                        <MailOutline color="primary" />
                      </ListItemIcon> :
                      <ListItemText primary={translate!('header.find-a-property')}/>
                  }
                </MenuItem>
              </NavLink>
              <NavLink to="/explore">
                <MenuItem>
                  {
                     viewSize !== 'lg' ?
                      <ListItemIcon>
                        <MailOutline color="primary" />
                      </ListItemIcon> :
                    <ListItemText primary={translate!('header.explore')} />
                  }
                </MenuItem>
              </NavLink>
              <NavLink to="/people">
                <MenuItem>
                  {
                     viewSize !== 'lg' ?
                      <ListItemIcon>
                        <MailOutline color="primary" />
                      </ListItemIcon> :
                    <ListItemText primary={translate!('header.people')} />
                  }
                </MenuItem>
              </NavLink>
              {/* <NavLink to="/settings">
                <MenuItem>
                  <ListItemText primary={translate!('header.settings')} />
                </MenuItem>
              </NavLink> */}
            </nav>
            <Manager>
              <Target className="homeHeader__notify-wrapper">
                {this.props.notifyCount! > 0 ? (
                  <Tooltip title={translate!('header.notificationTooltip')}>
                    <IconButton onClick={this.handleNotifyTouchTap}>
                      <div className="homeHeader__notify">
                        <div className="title">{this.props.notifyCount}</div>
                      </div>
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title={translate!('header.notificationTooltip')}>
                    <IconButton onClick={this.handleNotifyTouchTap}>
                      <MailOutline color="primary" />
                    </IconButton>
                  </Tooltip>
                )}
              </Target>
              <Notify
                open={this.state.openNotifyMenu}
                anchorEl={this.state.anchorEl}
                onRequestClose={this.handleCloseNotify}
              />
            </Manager>

            {/* User avatar*/}
            <div
              className={cx('grid grid__center', classes.headerAvatarContainer)}
              onClick={this.handleAvatarTouchTap}
            >
              <Badge className={classes.badge} badgeContent={4}>
                <UserAvatarComponent
                  fullName={this.props.fullName!}
                  fileName={this.props.avatar!}
                  size={61}
                  style={classes.avatarStyle}
                  onMouseEnter={this.handleAvatarTouchTap}
                />
              </Badge>
              <SvgKeyboardArrowDown color="primary"/>
            </div>

            <Menu
              open={this.state.openAvatarMenu}
              anchorEl={this.state.anchorEl!}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right'}}
              onClose={this.handleRequestClose}
              className={classes.menuRoot}
            >
              <MenuItem className={classes.headerNavItem}>
                {' '}{translate!('header.my-properties')}{' '}
              </MenuItem>
              <MenuItem className={classes.headerNavItemSmall}>
                <NavLink to={`/${userId}/property`} onClick={() => {this.setState({openAvatarMenu: false})}}>
                  {' '}{translate!('header.add-property')}{' '}
                </NavLink>
              </MenuItem>
              <MenuItem className={classes.activeNavItem}>
                {' '}{translate!('header.my-favorites')}{' '}
              </MenuItem>
              <MenuItem className={classes.navItem}>
                <NavLink to={`/${userId}`} onClick={() => {this.setState({openAvatarMenu: false})}}>
                  {' '}{translate!('header.edit-profile')}{' '}
                </NavLink>
              </MenuItem>
              <MenuItem className={classes.navItem}>
                {' '}{translate!('header.settings')}{' '}
              </MenuItem>
  
              {
                 viewSize === 'xs' &&
                  <div>
                    <MenuItem className={classes.navItem}>
                      <NavLink to="/find-a-property">
                        {' '}{translate!('header.find-a-property')}{' '}
                      </NavLink>
                    </MenuItem>
                    <MenuItem className={classes.navItem}>
                      <NavLink to="/explore">
                        {' '}{translate!('header.explore')}{' '} 
                      </NavLink>
                    </MenuItem>
                    <MenuItem className={classes.navItem}>
                      <NavLink to="/people">
                        {' '}{translate!('header.people')}{' '}
                      </NavLink>
                    </MenuItem>
                  </div>
              }

              <MenuItem className={classes.navItem} onClick={this.handleLogout.bind(this)}>
                {' '}{translate!('header.logout')}{' '}
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (
  dispatch: Function,
  ownProps: IHomeHeaderComponentProps
) => {
  return {
    logout: () => dispatch(authorizeActions.dbLogout())
  }
}

// - Map state to props
const mapStateToProps = (
  state: Map<string, any>,
  ownProps: IHomeHeaderComponentProps
) => {
  const uid = state.getIn(['authorize', 'uid'], 0)
  const userNotifies: Map<string, any> = state.getIn(['notify', 'userNotifies'])
  let notifyCount = userNotifies
    ? userNotifies
        .filter(notification => !notification.get('isSeen', false))
        .count()
    : 0
  const user = state.getIn(['user', 'info', uid], {})
  return {
    userId: uid,
    translate: getTranslate(state.get('locale')),
    avatar: user.avatar || '',
    fullName: user.fullName || '',
    title: state.getIn(['global', 'headerTitle'], ''),
    notifyCount
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(HomeHeaderComponent as any) as any)
