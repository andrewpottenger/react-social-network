// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import config from 'src/config'
import { Map, List as ImuList } from 'immutable'

// - Material UI
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
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
import PostComponent from 'src/components/post'
import { Project } from 'components/profile'

// - Import API
import * as PostAPI from 'src/api/PostAPI'

// - Import actions
import * as globalActions from 'store/actions/globalActions'
import * as userActions from 'store/actions/userActions'
import { Post } from 'src/core/domain/posts'
import { ISimplePropertyComponentProps } from './ISimplePropertyComponentProps'
import { ISimplePropertyComponentState } from './ISimplePropertyComponentState'

// - Import styles
import styles from './styles'

/**
 * Create component class
 */
export class SimplePropertyComponent extends Component<
  ISimplePropertyComponentProps,
  ISimplePropertyComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: ISimplePropertyComponentProps) {
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

  addNewProject = () => {

  }

  moreProject = () => {

  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, classes, image, projects } = this.props

    return (
      <div className="property">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={image}
            title="Casa Austin Austin, Tx"
          >
            <p className="property__label">Casa Austin</p>
            <p className="property__label">Austin, TX</p>
          </CardMedia>
          <CardContent className={classes.details}>
            <div className="grid grid__space-between grid__center property__project-header">
              <p className="p-lg--primary">My Latest Project</p>
              <Button
                variant="flat"
                onClick={this.addNewProject}
                className={classes.newButton}
              >
                Add New +
              </Button>
            </div>
            {
              projects.map((item: any, index: number) => (
                <Project
                  key={`project-${index.toString()}`}
                  image={item.image}
                  name={item.name}
                  date={item.date}
                  progress={item.progress}
                />
              ))
            }
            <div className="grid grid__right property__project-footer">
              <Button
                variant="flat"
                color="primary"
                onClick={this.moreProject}
                className={classes.moreButton}
              >
                More >
              </Button>
            </div>
          </CardContent>
        </Card>
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
  ownProps: ISimplePropertyComponentProps
) => {
  return {}
}

/**
 * Map state to props
 * @param  {object} state is the obeject from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
const mapStateToProps = (
  state: Map<string, any>,
  ownProps: ISimplePropertyComponentProps
) => {
  // const uid = state.getIn(['authorize', 'uid'], {})
  // const global = state.get('global', {})
  // let mergedPosts = Map({})
  // const circles = state.getIn(['circle', 'circleList'], {})
  // const followingUsers: Map<string, any> = state.getIn(
  //   ['circle', 'userTies'],
  //   {}
  // )
  // const posts = state.getIn(['post', 'userPosts', uid], {})
  // followingUsers.forEach((user, userId) => {
  //   let newPosts = state.getIn(['post', 'userPosts', userId], {})
  //   mergedPosts = mergedPosts.merge(newPosts)
  // })
  // mergedPosts = mergedPosts.merge(posts)
  // return {
  //   mergedPosts,
  // }
  return {}
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(SimplePropertyComponent as any) as any)
