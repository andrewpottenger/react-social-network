import { Post } from 'src/core/domain/posts'

export interface ISearchTextFieldComponentProps {

  /**
   * id
   *
   * @type {string}
   * @memberof ISearchTextFieldComponentProps
   */
  id: string

  /**
   * label
   *
   * @type {string}
   * @memberof ISearchTextFieldComponentProps
   */
  label: string

  /**
   * defaultValue
   *
   * @type {string}
   * @memberof ISearchTextFieldComponentProps
   */
  defaultValue?: string

  /**
   * Mutiline
   *
   * @type {boolean}
   * @memberof ISearchTextFieldComponentProps
   */
  multiline?: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Value Change handler
   */
  handleChange: (value: string) => void

}
