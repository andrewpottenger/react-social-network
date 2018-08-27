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
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any, params?: {}) => any
}
