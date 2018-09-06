export interface IInfoComponentProps {

  /**
   * User identifier
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  userId: string

    /**
     * Profile for current user {true} or not {false}
     *
     * @type {boolean}
     * @memberof IInfoComponentProps
     */
  isAuthedUser: boolean

  /**
   * User full name
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  fullName: string

  /**
   * User's avatar address
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  avatar: string

  /**
   * User's address
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  address: string

  /**
   * User's companyName
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  companyName: string

  /**
   * Number of user followers
   *
   * @type {number}
   * @memberof IProfileHeaderComponentProps
   */
  followerCount?: number

  /**
   * Styles
   */
  classes?: any

  /**
   * Open edit profile dialog
   *
   * @memberof IInfoComponentProps
   */
  openEditor?: () => void

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
