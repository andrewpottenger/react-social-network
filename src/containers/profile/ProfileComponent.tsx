// - Import react components
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { getTranslate } from 'react-localize-redux'
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
import { Property } from 'src/core/domain/properties'

// - Import actions
import * as postActions from 'src/store/actions/postActions'
import * as userActions from 'src/store/actions/userActions'
import * as propertyActions from 'store/actions/propertyActions'
import * as dbGetCirclesByUserId from 'store/actions/circleActions'
import { IProfileComponentProps } from './IProfileComponentProps'
import { IProfileComponentState } from './IProfileComponentState'
import { Profile } from 'core/domain/users'

// - Import styles
import styles from './styles'
import { circleActions } from 'store/actions'

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
    this.props.loadProperties()
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
    const { fullName, companyName, avatar, isAuthedUser, userId, properties, classes } = this.props
    const St = StreamComponent as any
    const postList = this.postLoad() as
      | { evenPostList: Post[]; oddPostList: Post[]; divided: boolean }
      | any

    return (
      <div className="container">
        <div className={classes.profile}>          
          <div className={classes.sideContainer}>
            <Info
              userId={userId}
              isAuthedUser={isAuthedUser}
              fullName={fullName}
              avatar={avatar}
              address="Austin, TX"
              companyName={companyName}
              followerCount={573}
            />
            <Neighbors
              userId={userId}
              isAuthedUser={isAuthedUser}
              fullName="Brian D’Ambrosio"
              avatar="images/profile-image.jpg"
              address1="Austin, TX"
              address2="Casa Austin"
              followerCount={573}
            />
          </div>
          <div className={classes.mainContainer}>
            {
              isAuthedUser &&
              <NavLink to={`/${this.props.userId}/property`}>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.addNewProperty}
                  className={classes.addButton}
                >
                  Add New Property +
                </Button>
              </NavLink>
            }
            {
              properties && properties.length > 0 ?
                properties!.map((property: Property, index: number) => (
                  <NavLink
                    key={`property-${userId}-${index.toString()}`}
                    to={isAuthedUser ? `/${this.props.userId}/property/${property.id}` : `/${this.props.userId}`}
                  >
                    <SimpleProperty
                      property={property}
                      // Todo | We should add the real projects after edit project module is done.
                      projects={propertyData.projects}
                    />
                  </NavLink>
                )) :
                <p className="p-md">There isn't any property</p>
            }
            {postList.evenPostList}
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
  ownProps: IProfileComponentProps
) => {
  const { userId } = ownProps.match.params
  return {
    loadPosts: () => dispatch(postActions.dbGetPostsByUserId(userId)),
    loadUserInfo: () => dispatch(userActions.dbGetUserInfoByUserId(userId, 'header')),
    loadProperties: () => dispatch(propertyActions.dbGetProperty(userId)),
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
  const userProfile = state.getIn(['user', 'info', userId], {}) as Profile
  const properties = state.getIn(['property', 'properties'])
  console.log('properties ==>', properties)
  
  return {
    translate: getTranslate(state.get('locale')),
    avatar: userProfile.avatar,
    fullName: userProfile.fullName,
    companyName: userProfile.companyName,
    // banner: userProfile.banner,
    // tagLine: userProfile.tagLine,
    isAuthedUser: userId === uid,
    userId,
    properties,
    posts,
    hasMorePosts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(
  styles as any
)(ProfileComponent as any) as any)
