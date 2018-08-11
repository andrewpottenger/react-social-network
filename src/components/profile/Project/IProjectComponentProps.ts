export interface IProjectComponentProps {

  /**
   * Property Image
   *
   * @type {string}
   * @memberof IProjectComponentProps
   */
  image: string

  /**
   * Project Name
   *
   * @type {string}
   * @memberof IProjectComponentProps
   */
  name: string

  /**
   * Project date
   *
   * @type {string}
   * @memberof IProjectComponentProps
   */
  date: string

  /**
   * Project Progress
   *
   * @type {number}
   * @memberof IProjectComponentProps
   */
  progress: number

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
