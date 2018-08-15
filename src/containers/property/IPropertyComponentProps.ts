import { Post } from 'src/core/domain/posts'

export interface IPropertyComponentProps {

  /**
   * Router match
   *
   * @type {*}
   * @memberof IPropertyComponentProps
   */
  match: any

  /**
   * User's post
   *
   * @type {{[postId: string]: Post}}
   * @memberof IPropertyComponentProps
   */
  posts: {[postId: string]: Post}

  /**
   * String user full name
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  name: string

  /**
   * User tag line
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  tagLine: string

  /**
   * User's avatar address
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  avatar: string

  /**
   * It's current user profile {true} or not {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentProps
   */
  isAuthedUser: boolean

  /**
   * User's banner
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  banner: string

  /**
   * User identifier
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  userId: string

  /**
   * Load user's post
   *
   * @memberof IPropertyComponentProps
   */
  loadPosts: () => any

  /**
   * Load user's profile
   *
   * @memberof IPropertyComponentProps
   */
  loadUserInfo: () => any

  /**
   * If there is more posts to show in profile
   */
  hasMorePosts: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, params?: {}) => any
}
