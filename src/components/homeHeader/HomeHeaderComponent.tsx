// - Import react components
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import { Map } from 'immutable'

// - Material UI
import SvgDehaze from 'material-ui-icons/Dehaze'
import { grey, blue } from 'material-ui/colors'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import SvgHome from 'material-ui-icons/Home'
import SvgExplore from 'material-ui-icons/Explore'
import SvgSettings from 'material-ui-icons/Settings'
import SvgPeople from 'material-ui-icons/People'
import SvgKeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import AppBar from 'material-ui/AppBar'
import Menu, { MenuList, MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import Hidden from 'material-ui/Hidden'
import NotificationsIcon from 'material-ui-icons/Notifications'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import { Manager, Target, Popper } from 'react-popper'
import { withStyles } from 'material-ui/styles'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import config from 'src/config'

// - Import components
import UserAvatarComponent from 'components/userAvatar'
import Notify from 'components/notify'

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import { authorizeActions } from 'store/actions'
import { IHomeHeaderComponentProps } from './IHomeHeaderComponentProps'
import { IHomeHeaderComponentState } from './IHomeHeaderComponentState'

import { COLORS } from 'components/ui-constants'

const s = require('./styles.scss')

const styles = {
  root: {
    backgroundColor: '#a5792a'
  },
  flex: {
    flex: 1
  },
  menuItemDefault: {
    fontSize: 14
  },
  myProps: {
    backgroundColor: COLORS.BRAND_LIGHT,
    color: COLORS.WHITE
  },
  addProp: {
    fontSize: 12
  },
  myFave: {
    backgroundColor: COLORS.GEY_DARK,
    color: COLORS.WHITE
  },
  restMenuItems: {
    backgroundColor: COLORS.GREY_LIGHT,
    color: '#4a4a4a'
  }
}

// - Create HomeHeader component class
export class HomeHeaderComponent extends Component<
  IHomeHeaderComponentProps,
  IHomeHeaderComponentState
> {
  styles = {
    avatarStyle: {
      margin: 5,
      cursor: 'pointer'
    }
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
      openNotifyMenu: false
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
    const { onToggleDrawer } = this.props
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
    const { drawerStatus } = this.props
    // Set initial state
    let width = window.innerWidth

    if (width >= 600 && !drawerStatus) {
      this.onToggleSidebar()
    } else if (width < 600) {
    }
  }

  componentDidMount() {
    this.handleResize(null)
  }

  renderDropdownMenu = () => {
    const { translate, classes } = this.props
    const { openAvatarMenu, anchorEl } = this.state

    const styleBrand = cx(classes.menuItemDefault, classes.myProps)

    return (
      <Menu
        open={openAvatarMenu}
        anchorEl={this.state.anchorEl!}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClose={this.handleRequestClose}
        className={cx('dropdown')}
      >
        <MenuItem className={styleBrand}>
          {translate!('header.my-properties')}
        </MenuItem>
        <MenuItem className={cx(styleBrand, classes.addProp)}>
          {translate!('header.add-property')}
        </MenuItem>
        <MenuItem className={cx(classes.menuItemDefault, classes.myFave)}>
          {translate!('header.my-favorites')}
        </MenuItem>
        <MenuItem
          className={cx(classes.menuItemDefault, classes.restMenuItems)}
        >
          {translate!('header.edit-profile')}
        </MenuItem>
        <MenuItem
          className={cx(classes.menuItemDefault, classes.restMenuItems)}
        >
          {translate!('header.settings')}
        </MenuItem>
        <MenuItem
          className={cx(classes.menuItemDefault, classes.restMenuItems)}
          onClick={this.handleLogout}
        >
          {translate!('header.logout')}
        </MenuItem>
      </Menu>
    )
  }

  // Render app DOM component
  render() {
    const { classes, translate, theme } = this.props
    const anchor = theme.direction === 'rtl' ? 'right' : 'left'

    return (
      <AppBar position="fixed" color="secondary" className={s.container}>
        <Toolbar className={s.toolbar}>
          {/* Left side */}
          <a href="/">
            <img src="images/backyardelogo.png" width="120" alt="Backyarde" />
          </a>
          {/*<IconButton onClick={this.onToggleSidebar} >*/}
          {/*<SvgDehaze color='primary' style={{ cursor: 'pointer' }} />*/}
          {/*</IconButton>*/}
          {/* Header title */}
          {/*<Typography variant='title' color='primary' style={{ marginLeft: '15px' }} >*/}
          {/*{config.settings.appName}*/}
          {/*</Typography>*/}
          <div className="homeHeader__title-root">
            <Hidden smDown>
              <div
                className={cx({
                  'homeHeader__title-left': anchor === 'left',
                  'homeHeader__title-right': anchor === 'right'
                })}
              >
                {/*{this.props.title}*/}
              </div>
            </Hidden>
          </div>

          {/* Notification */}
          <div className="homeHeader__right">
            <nav className="nav-links">
              {/*<NavLink to='/'>*/}
              {/*<MenuItem>*/}
              {/*<ListItemIcon>*/}
              {/*<SvgHome />*/}
              {/*</ListItemIcon>*/}
              {/*<ListItemText inset primary={translate!('header.home')} />*/}
              {/*</MenuItem>*/}
              {/*</NavLink>*/}
              <NavLink to="/find-a-property">
                <MenuItem>
                  <ListItemIcon>
                    <SvgHome />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={translate!('header.find-a-property')}
                  />
                </MenuItem>
              </NavLink>
              <NavLink to="/explore">
                <MenuItem>
                  <ListItemIcon>
                    <SvgExplore />
                  </ListItemIcon>
                  <ListItemText inset primary={translate!('header.explore')} />
                </MenuItem>
              </NavLink>
              <NavLink to="/people">
                <MenuItem>
                  <ListItemIcon>
                    <SvgPeople />
                  </ListItemIcon>
                  <ListItemText inset primary={translate!('header.people')} />
                </MenuItem>
              </NavLink>
              <NavLink to="/settings">
                <MenuItem>
                  <ListItemIcon>
                    <SvgSettings />
                  </ListItemIcon>
                  <ListItemText inset primary={translate!('header.settings')} />
                </MenuItem>
              </NavLink>
            </nav>
            <Manager>
              <Target>
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
                      <NotificationsIcon
                        style={{ color: 'rgba(255, 255, 255, 0.87)' }}
                      />
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

            <UserAvatarComponent
              onClick={this.handleAvatarTouchTap}
              fullName={this.props.fullName!}
              fileName={this.props.avatar!}
              size={32}
              style={this.styles.avatarStyle}
            />
            {this.renderDropdownMenu()}
            <SvgKeyboardArrowDown />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapDispatchToProps = (
  dispatch: Function,
  ownProps: IHomeHeaderComponentProps
) => {
  return {
    logout: () => dispatch(authorizeActions.dbLogout())
  }
}

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
    translate: getTranslate(state.get('locale')),
    avatar: user.avatar || '',
    fullName: user.fullName || '',
    title: state.getIn(['global', 'headerTitle'], ''),
    notifyCount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {
  withTheme: true
})(HomeHeaderComponent as any) as any)
