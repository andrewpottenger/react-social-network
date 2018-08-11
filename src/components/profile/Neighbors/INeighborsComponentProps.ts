export interface INeighborsComponentProps {

  /**
   * User identifier
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  userId: string

    /**
     * Profile for current user {true} or not {false}
     *
     * @type {boolean}
     * @memberof INeighborsComponentProps
     */
  isAuthedUser: boolean

  /**
   * User full name
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  fullName: string

  /**
   * User's avatar address
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  avatar: string

  /**
   * User's address1
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  address1: string

  /**
   * User's address2
   *
   * @type {string}
   * @memberof INeighborsComponentProps
   */
  address2: string

  /**
   * Number of user followers
   *
   * @type {number}
   * @memberof INeighborsComponentProps
   */
  followerCount?: number

  /**
   * Open edit profile dialog
   *
   * @memberof INeighborsComponentProps
   */
  openEditor?: () => void

  /**
   * Whether edit profile is open
   */
  editProfileOpen?: boolean

  /**
   * Styles
   */
  classes?: any

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
