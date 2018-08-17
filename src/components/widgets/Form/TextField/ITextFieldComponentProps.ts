import { Post } from 'src/core/domain/posts'

export interface ITextFieldComponentProps {

  /**
   * id
   *
   * @type {string}
   * @memberof ITextFieldComponentProps
   */
  id: string

  /**
   * label
   *
   * @type {string}
   * @memberof ITextFieldComponentProps
   */
  label: string

  /**
   * defaultValue
   *
   * @type {string}
   * @memberof ITextFieldComponentProps
   */
  defaultValue?: string

  /**
   * Mutiline
   *
   * @type {boolean}
   * @memberof ITextFieldComponentProps
   */
  multiline?: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Value Change handler
   */
  handleChange: (value: string) => string

}
