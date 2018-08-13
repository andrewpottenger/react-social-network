import { Post } from 'src/core/domain/posts'

export interface IPropertyComponentProps {

  /**
   * Property Image
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  image: string

  /**
   * Latest Projects
   *
   * @type {any}
   * @memberof IPropertyComponentProps
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
