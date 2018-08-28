import { Post } from 'src/core/domain/posts'
import { Property } from 'src/core/domain/properties'

export interface ISimplePropertyComponentProps {

  /**
   * Property
   *
   * @type {Property}
   * @memberof ISimplePropertyComponentProps
   */
  property: Property

  /**
   * Latest Projects
   *
   * @type {any}
   * @memberof ISimplePropertyComponentProps
   */
  projects: any
 
  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
