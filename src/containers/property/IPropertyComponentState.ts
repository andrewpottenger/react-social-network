import { Property } from 'core/domain/properties'

export interface IPropertyComponentState {

  /**
   * Name input value
   *
   * @type {Property}
   * @memberof IPropertyComponentState
   */
  property: Property

  /**
   * Image gallery dialog is open for choosing banner image {true} or not {false}
   *
   * @type {boolean}
   * @memberof IEditProfileComponentState
   */
  openBanner: boolean

  /**
   * User's banner URL
   *
   * @type {string}
   * @memberof IEditProfileComponentState
   */
  banner: string

}
