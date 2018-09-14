export interface INeighborsComponentProps {

  /**
   * User identifier
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  userId: string

    /**
     *
     *
     * @type {boolean}
     * @memberof INeighborsComponentProps
     */
  isAuthedUser: boolean

  /**
   * 
   *
   * @type {object}
   * @memberof INeighborsComponentProps
   */
  neighbors: any,

  /**
   * Open edit profile dialog
   *
   * @memberof INeighborsComponentProps
   */
  openEditor?: () => void

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
