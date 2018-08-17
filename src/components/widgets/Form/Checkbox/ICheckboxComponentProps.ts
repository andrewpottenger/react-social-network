import { Post } from 'src/core/domain/posts'

export interface ICheckboxComponentProps {

  /**
   * id
   *
   * @type {string}
   * @memberof ICheckboxComponentProps
   */
  id: string

  /**
   * label
   *
   * @type {string}
   * @memberof ICheckboxComponentProps
   */
  label: string

  /**
   * defaultValue
   *
   * @type {string}
   * @memberof ICheckboxComponentProps
   */
  defaultValue?: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Value Change handler
   */
  handleChange: (value: boolean) => void

}
