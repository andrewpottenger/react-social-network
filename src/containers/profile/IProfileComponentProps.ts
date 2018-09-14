import { Post } from 'src/core/domain/posts'
import { Property } from 'src/core/domain/properties'

export interface IProfileComponentProps {

  /**
   * Router match
   *
   * @type {*}
   * @memberof IProfileComponentProps
   */
  match: any

  /**
   * User's post
   *
   * @type {{[postId: string]: Post}}
   * @memberof IProfileComponentProps
   */
  posts: {[postId: string]: Post}

  /**
   * String user full name
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  fullName: string

  /**
   * String user company name
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  companyName: string

  /**
   * User tag line
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  tagLine: string

  /**
   * User's avatar address
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  avatar: string

  /**
   * It's current user profile {true} or not {false}
   *
   * @type {boolean}
   * @memberof IProfileComponentProps
   */
  isAuthedUser: boolean

  /**
   * User's banner
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  banner: string

  /**
   * User identifier
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  userId: string

  /**
   * Properties
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  properties: Property[],

  /**
   * Properties
   *
   * @type {object}
   * @memberof IProfileComponentProps
   */
  ties: any,

  /**
   * Properties
   *
   * @type {object}
   * @memberof IProfileComponentProps
   */
  followers: any,

  /**
   * If there is more posts to show in profile
   */
  hasMorePosts: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Load user's post
   *
   * @memberof IProfileComponentProps
   */
  loadPosts: () => any

  /**
   * Load user's profile
   *
   * @memberof IProfileComponentProps
   */
  loadUserInfo: () => any

  /**
   * Load user's properties
   *
   * @memberof IProfileComponentProps
   */
  loadProperties: () => any

  /**
   * Translate to locale string
   */
  translate?: (state: any, params?: {}) => any
}
