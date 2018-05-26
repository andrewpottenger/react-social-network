// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import RaisedButton from 'material-ui/Button'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map } from 'immutable'

import ProfileHeader from 'src/components/profileHeader'
import StreamComponent from 'containers/stream'

import ProfileInformationContainer from './ProfileInfoContainer'
import Neighbours from 'components/Profile/Neighbours'
import Projects from 'components/Profile/Projects'
import Feed from 'components/Profile/Feed'

import * as postActions from 'src/store/actions/postActions'
import * as userActions from 'src/store/actions/userActions'
import * as globalActions from 'src/store/actions/globalActions'
import { IProfileComponentProps } from './IProfileComponentProps'
import { IProfileComponentState } from './IProfileComponentState'
import { Profile } from 'core/domain/users'

const s = require('./styles.scss')

export class ProfileComponent extends Component<
  IProfileComponentProps,
  IProfileComponentState
> {
  constructor(props: IProfileComponentProps) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    // this.props.loadPosts()
    this.props.loadUserInfo()
  }

  render() {
    const styles = {
      profile: {},
      header: {},
      content: {},
      showcover: {
        height: '450px'
      },
      avatar: {
        border: '2px solid rgb(255, 255, 255)'
      }
    }

    const { translate, userProfile, isAuthedUser } = this.props
    // const St = StreamComponent as any
    // const posts = Map(this.props.posts)
    return (
      <div className={s.container}>
        <div className={s.leftPanel}>
          <ProfileInformationContainer />
          <Neighbours />
        </div>
        <div className={s.rightPanel}>
          <Projects />
          <Feed />
        </div>
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
  const userProfile = state.getIn(['user', 'info', userId], {}) as Profile

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
export default connect(mapStateToProps, mapDispatchToProps)(
  ProfileComponent as any
)
