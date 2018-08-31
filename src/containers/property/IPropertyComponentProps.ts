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
   * It's current user profile {true} or not {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentProps
   */
  isAuthedUser: boolean

  /**
   * User identifier
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  userId: string

  /**
   * User identifier
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  propertyId: string

  /**
   * Properties
   *
   * @type {string}
   * @memberof IProfileComponentProps
   */
  properties: Property[]

  /**
   * User avatar address
   *
   * @type {string}
   * @memberof IPostWriteComponentProps
   */
  ownerAvatar?: string

  /**
   * The post owner name
   */
  ownerDisplayName?: string

  /**
   * get property
   *
   * @memberof IPropertyComponentProps
   */
  getProperty: () => any

  /**
   * add property
   *
   * @memberof IPropertyComponentProps
   */
  addProperty: (property: Property) => any

  /**
   * update property
   *
   * @memberof IPropertyComponentProps
   */
  updateProperty: (property: Property) => any

  /**
   * post
   *
   * @memberof IPropertyComponentProps
   */
  post: (post: Post, callBack: Function) => any

  /**
   * Go Back
   *
   * @memberof IPropertyComponentProps
   */
  goBack: () => any

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, params?: {}) => any
}
