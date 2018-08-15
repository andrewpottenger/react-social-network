import { Post } from 'src/core/domain/posts'

export interface ISimplePropertyComponentProps {

  /**
   * Property Image
   *
   * @type {string}
   * @memberof ISimplePropertyComponentProps
   */
  image: string

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
