import { ServerRequestModel } from 'models/server/serverRequestModel'
import { UserTie } from 'core/domain/circles'

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
   * Whether current user followed this user
   */
  isFollowed?: boolean

  /**
   * Number of user followers
   *
   * @type {number}
   * @memberof IProfileHeaderComponentProps
   */
  followerCount?: number

  /**
   * The `Following` circle identifier of current user
   */
  followingCircle?: Map<string, any>

  /**
   * The status of following user server request
   */
  followRequest?: ServerRequestModel

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
   * Add referer user to the `Following` circle of current user
   */
  followUser?: (circleId: string, userFollowing: UserTie, callback: Function) => any

  /**
   * Create a circle
   */
  createCircle?: (name: string, callback?: Function) => any

  /**
   * Load circles by userId
   */
  loadCircles?: (userId: string) => any

  /**
   * Load UserTies by userId
   */
  getUserTies?: (userId: string) => any

  /**
   * Load followers by userId
   */
  getFollowers?: (userId: string) => any

  /**
   * Translate to locale string
   */
  translate?: (state: any) => any
}
