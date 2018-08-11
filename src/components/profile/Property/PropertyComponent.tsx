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
import { IPropertyComponentProps } from './IPropertyComponentProps'
import { IPropertyComponentState } from './IPropertyComponentState'

const styles = (theme: any) => ({
  card: {
    display: 'flex',
    maxWidth: '906px',
    height: '537px',
  },
  cover: {
    flex: '1 0 auto',
  },
  details: {
    width: '474px',
    display: 'flex',
    flexDirection: 'column',
    padding: '27px 20px 5px 20px',
    backgroundColor: '#E7E7E7',
  },

})

/**
 * Create component class
 */
export class PropertyComponent extends Component<
  IPropertyComponentProps,
  IPropertyComponentState
> {
  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IPropertyComponentProps) {
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
   * Create a list of posts
   * @return {DOM} posts
   */
  // postLoad = () => {
  //   // let { match } = this.props
  //   let posts: any = this.props.mergedPosts
  //   // let { tag } = match.params
  //   if (posts === undefined || !(posts.keySeq().count() > 0)) {
  //     return <h1>'Nothing has shared.'</h1>
  //   } else {
  //     let postBack = { divided: false, oddPostList: [], evenPostList: [] }
  //     let parsedPosts: ImuList<any> = ImuList()
  //     posts.forEach((post: Map<string, any>) => {
  //       // if (tag) {
  //       //   let regex = new RegExp('#' + tag, 'g')
  //       //   let postMatch = String(post.get('body', '')).match(regex)
  //       //   if (postMatch !== null) {
  //       //     parsedPosts = parsedPosts.push(post)
  //       //   }
  //       // } else {
  //         parsedPosts = parsedPosts.push(post)
  //       // }
  //     })
  //     const sortedPosts = PostAPI.sortImuObjectsDate(parsedPosts)
  //     if (sortedPosts.count() > 6) {
  //       postBack.divided = true
  //     } else {
  //       postBack.divided = false
  //     }
  //     let index = 0
  //     sortedPosts.forEach(post => {
  //       let newPost: any = (
  //         <div key={`${post!.get('id')!}-stream-div`}>
  //           {index > 1 || (!postBack.divided && index > 0) ? (
  //             <div style={{ height: '16px' }} />
  //           ) : (
  //             ''
  //           )}
  //           <PostComponent
  //             key={`${post!.get('id')}-stream-div-post`}
  //             post={post! as any}
  //           />
  //         </div>
  //       )

  //       if (index % 2 === 1 && postBack.divided) {
  //         postBack.oddPostList.push(newPost as never)
  //       } else {
  //         postBack.evenPostList.push(newPost as never)
  //       }
  //       ++index
  //     })
  //     return postBack
  //   }
  // }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { translate, classes, image, projects } = this.props
    // const postList = this.postLoad() as
    //   | { evenPostList: Post[]; oddPostList: Post[]; divided: boolean }
    //   | any

    return (
      <div className="property">
        {/* <div className="">
          {postList.evenPostList}
        </div> */}
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
  ownProps: IPropertyComponentProps
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
  ownProps: IPropertyComponentProps
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
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(PropertyComponent as any) as any)
