import { Property } from 'core/domain/properties'

export type GalleryType = 'ProfileImageGallery' | 'ShowcaseImagesGallery'

export interface IPropertyComponentState {

  /**
   * Name input value
   *
   * @type {Property}
   * @memberof IPropertyComponentState
   */
  property: Property
  
  /**
   * EditMode {true} or {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentState
   */
  isEditMode: boolean

  /**
   * visibleOnNewsFeed {true} or {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentState
   */
  visibleOnNewsFeed: boolean

  /**
   * openToOffers {true} or {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentState
   */
  openToOffers: boolean

  /**
   * Image gallery dialog is open for choosing banner image {true} or not {false}
   *
   * @type {boolean}
   * @memberof IPropertyComponentState
   */
  openImageGallery: boolean

  /**
   * Image gallery dialog type: ProfileImageGallery | ShowcaseImagesGallery
   *
   * @type {GalleryType}
   * @memberof IPropertyComponentState
   */
  galleryType: GalleryType

}
