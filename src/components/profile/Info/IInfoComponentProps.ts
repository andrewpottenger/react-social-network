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
   * User's address1
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  address1: string

  /**
   * User's address2
   *
   * @type {string}
   * @memberof IInfoComponentProps
   */
  address2: string

  /**
   * Number of user followers
   *
   * @type {number}
   * @memberof IProfileHeaderComponentProps
   */
  followerCount?: number

  /**
   * Open edit profile dialog
   *
   * @memberof IInfoComponentProps
   */
  openEditor?: () => void

  /**
   * Whether edit profile is open
   */
  editProfileOpen?: boolean

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
