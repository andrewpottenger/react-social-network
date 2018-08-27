import { Post } from 'src/core/domain/posts'
import { Property } from 'core/domain/properties'

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
   * add property
   *
   * @memberof IPropertyComponentProps
   */
  add: (property: Property) => any

  /**
   * update property
   *
   * @memberof IPropertyComponentProps
   */
  update: (property: Property) => any

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, params?: {}) => any
}
