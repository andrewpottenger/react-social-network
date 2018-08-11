export interface IPropertyComponentProps {

  /**
   * User's avatar address
   *
   * @type {string}
   * @memberof IPropertyComponentProps
   */
  image: string

  /**
   * User's avatar address
   *
   * @type {string}
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
