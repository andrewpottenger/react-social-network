// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map, List as ImuList } from 'immutable'

// - Import app components
import ProfileHeader from 'src/components/profileHeader'
import { Info, Neighbors, SimpleProperty } from 'src/components/profile'
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
import { IProfileComponentProps } from './IProfileComponentProps'
import { IProfileComponentState } from './IProfileComponentState'
import { Profile } from 'core/domain/users'

/**
 * Component styles
 */
const styles = (theme: any) => ({
  profile: {
    display: 'flex',
    maxWidth: '1217px',
    margin: '0 auto',
  },

  sideContainer: {
    width: '285px',
    marginRight: 26,
  },

  mainContainer: {
    flex: 1,
  },

  addButton: {
    fontSize: '14px',
    padding: '8px 24px',
    marginBottom: '29px',
    textTransform: 'capitalize',
  },
})

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
export class ProfileComponent extends Component<
  IProfileComponentProps,
  IProfileComponentState
> {
  static propTypes = {}

  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor(props: IProfileComponentProps) {
    super(props)

    // Defaul state
    this.state = {}

    // Binding functions to `this`
  }

  componentWillMount() {
    this.props.loadPosts()
    this.props.loadUserInfo()
  }

  /**
   * Create a list of posts
   * @return {DOM} posts
   */
  postLoad = () => {
    // let { match } = this.props
    // const { posts } = this.props
    const posts = Map(this.props.posts)
    // let { tag } = match.params
    if (posts === undefined || !(posts.keySeq().count() > 0)) {
      return <h1>'Nothing has shared.'</h1>
    } else {
      let postBack = { divided: false, oddPostList: [], evenPostList: [] }
      let parsedPosts: ImuList<any> = ImuList()
      posts.forEach((post: Post) => {
        // if (tag) {
        //   let regex = new RegExp('#' + tag, 'g')
        //   let postMatch = String(post.get('body', '')).match(regex)
        //   if (postMatch !== null) {
        //     parsedPosts = parsedPosts.push(post)
        //   }
        // } else {
          parsedPosts = parsedPosts.push(post)
        // }
      })
      const sortedPosts = PostAPI.sortImuObjectsDate(parsedPosts)
      if (sortedPosts.count() > 6) {
        postBack.divided = true
      } else {
        postBack.divided = false
      }
      let index = 0
      sortedPosts.forEach(post => {
        let newPost: any = (
          <div key={`${post!.get('id')!}-stream-div`}>
            {index > 1 || (!postBack.divided && index > 0) ? (
              <div style={{ height: '16px' }} />
            ) : (
              ''
            )}
            <PostComponent
              key={`${post!.get('id')}-stream-div-post`}
              post={post! as any}
            />
          </div>
        )

        if (index % 2 === 1 && postBack.divided) {
          postBack.oddPostList.push(newPost as never)
        } else {
          postBack.evenPostList.push(newPost as never)
        }
        ++index
      })
      return postBack
    }
  }

  addNewProperty = () => {

  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render() {
    const { loadPosts, hasMorePosts, translate, posts, classes } = this.props
    const St = StreamComponent as any
    const postList = this.postLoad() as
      | { evenPostList: Post[]; oddPostList: Post[]; divided: boolean }
      | any

    return (
      <div className={classes.profile}>
        {/* <div style={styles.header}>
          <ProfileHeader
            tagLine={this.props.tagLine}
            avatar={this.props.avatar}
            isAuthedUser={this.props.isAuthedUser}
            banner={this.props.banner}
            fullName={this.props.name}
            followerCount={0}
            userId={this.props.userId}
          />
        </div> */}
        
        <div className={classes.sideContainer}>
          <Info
            userId=""
            isAuthedUser={true}
            fullName="Brian D’Ambrosio"
            avatar="images/profile-image.jpg"
            address1="Austin, TX"
            address2="Casa Austin"
            followerCount={573}
          />
          <Neighbors
            userId=""
            isAuthedUser={true}
            fullName="Brian D’Ambrosio"
            avatar="images/profile-image.jpg"
            address1="Austin, TX"
            address2="Casa Austin"
            followerCount={573}
          />
          
        </div>
        <div className={classes.mainContainer}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.addNewProperty}
            className={classes.addButton}
          >
            Add New Property +
          </Button>
          <SimpleProperty
            image={propertyData.image}
            projects={propertyData.projects}
          />

          {postList.evenPostList}
        </div>
        
        {/* {posts ? (
          <div style={styles.content}>
            <div className="profile__title">
              {translate!('profile.headPostsLabel', {
                userName: this.props.name
              })}
            </div>
            <div style={{ height: '24px' }} />
            <St
              posts={posts}
              loadStream={loadPosts}
              hasMorePosts={hasMorePosts}
              displayWriting={false}
            />
          </div>
        ) : (
          <div className="profile__title">
            {translate!('profile.nothingSharedLabel')}
          </div>
        )} */}
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
  ownProps: IProfileComponentProps
) => {
  const { userId } = ownProps.match.params
  return {
    loadPosts: () => dispatch(postActions.dbGetPostsByUserId(userId)),
    loadUserInfo: () =>
      dispatch(userActions.dbGetUserInfoByUserId(userId, 'header'))
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
  ownProps: IProfileComponentProps
) => {
  const { userId } = ownProps.match.params
  const uid = state.getIn(['authorize', 'uid'], 0)
  const hasMorePosts = state.getIn(['post', 'profile', 'hasMoreData'])
  const posts = state.getIn(['post', 'userPosts', userId])
  const userProfile = state.getIn(['user', 'info', uid], {}) as Profile
  return {
    translate: getTranslate(state.get('locale')),
    avatar: userProfile.avatar,
    name: userProfile.fullName,
    banner: userProfile.banner,
    tagLine: userProfile.tagLine,
    isAuthedUser: userId === uid,
    userId,
    posts,
    hasMorePosts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(ProfileComponent as any) as any)
