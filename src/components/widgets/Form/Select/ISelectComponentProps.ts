import { Post } from 'src/core/domain/posts'

export interface ISelectComponentProps {

  /**
   * id
   *
   * @type {string}
   * @memberof ISelectComponentProps
   */
  id: string

  /**
   * label
   *
   * @type {string}
   * @memberof ISelectComponentProps
   */
  label: string

  /**
   * label
   *
   * @type {{value: string, label: string}[]}
   * @memberof ISelectComponentProps
   */
  options: {value: string, label: string}[]

  /**
   * defaultValue
   *
   * @type {string}
   * @memberof ISelectComponentProps
   */
  defaultValue?: string

  /**
   * Styles
   */
  classes?: any

  /**
   * Value Change handler
   */
  handleChange: (value: string) => void

}
