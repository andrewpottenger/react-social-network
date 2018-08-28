// - Import react components
import { provider } from 'src/socialEngine'
import { Map } from 'immutable'

// - Import domain
import { Property } from 'src/core/domain/properties'
import { SocialError } from 'src/core/domain/common'

// - Import action types
import { PropertyActionType } from 'constants/propertyActionType'

// - Import actions
import * as globalActions from 'store/actions/globalActions'

import { IPropertyService } from 'src/core/services/properties'

import { SocialProviderTypes } from 'src/core/socialProviderTypes'
import { resolve } from 'path'

/**
 * Get service providers
 */
const propertyService: IPropertyService = provider.get<IPropertyService>(SocialProviderTypes.PropertyService)

/* _____________ CRUD DB _____________ */

/**
 *  Get Property from database
 */
export const dbGetProperty = () => {
  return (dispatch: Function, getState: Function) => {
    const state: Map<string, any>  = getState()
    let uid: string = state.getIn(['authorize', 'uid'])

    return propertyService.getProperties(uid).then((properties: Property[]) => {
      console.log('properties =======>', properties)
      dispatch(updateProperties(uid, properties))
      // dispatch(closeEditProfile())
    })
    .catch((error: SocialError) => dispatch(globalActions.showMessage(error.message)))
  }
}

/**
 * 
 * Updata property information
 * @param {object} newProperty
 */
export const dbAddProperty = (newProperty: Property) => {
  return (dispatch: any, getState: Function) => {
    const state: Map<string, any>  = getState()
    let uid: string = state.getIn(['authorize', 'uid'])

    // let profile: Property = state.getIn(['user', 'info', uid])
    let updatedProperty: Property = {
      ...newProperty,
      ownerUserId: uid,
    }
    return propertyService.addProperty(uid, updatedProperty).then(() => {

      // dispatch(updateUserInfo(uid, updatedProperty))
      // dispatch(closeEditProfile())
    })
    .catch((error: SocialError) => dispatch(globalActions.showMessage(error.message)))

  }

}

/**
 * 
 * Updata property information
 * @param {object} newProperty
 */
export const dbUpdateProperty = (newProperty: Property) => {
  return (dispatch: any, getState: Function) => {
    const state: Map<string, any>  = getState()
    let uid: string = state.getIn(['authorize', 'uid'])

    // let profile: Property = state.getIn(['user', 'info', uid])
    let updatedProperty: Property = {
      ...newProperty,
      ownerUserId: uid,

      // avatar: newProperty.avatar || profile.avatar || '',
      // banner: newProperty.banner || profile.banner || 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
      // email: newProperty.email || profile.email || '',
      // fullName: newProperty.fullName || profile.fullName || '',
      // tagLine: newProperty.tagLine || profile.tagLine || '',
      // birthday: newProperty.birthday,
      // companyName: newProperty.companyName || '',
      // webUrl: newProperty.webUrl || '',
      // twitterId: newProperty.twitterId || '',
      // creationDate: newProperty.creationDate
    }
    return propertyService.updateProperty(uid, updatedProperty).then(() => {

      // dispatch(updateUserInfo(uid, updatedProperty))
      // dispatch(closeEditProfile())
    })
    .catch((error: SocialError) => dispatch(globalActions.showMessage(error.message)))

  }

}

// - Get people info from database
// export const dbGetPeopleInfo = (page: number, limit: number) => {
//   return (dispatch: any, getState: Function) => {
//     const state: Map<string, any>  = getState()
//     const people: Map<string, any> = state.getIn(['user', 'people'])
//     const lastPageRequest = people.get('lastPageRequest')
//     const lastUserId = people.get('lastUserId')

//     let uid: string = state.getIn(['authorize', 'uid'])

//     if (uid && lastPageRequest !== page) {

//       return userService.getUsersProfile(uid, lastUserId, page, limit).then((result) => {
//         if (!result.users || !(result.users.length > 0)) {
//           return dispatch(notMoreDataPeople())
//         }
//         // Store last user Id
//         dispatch(lastUserPeople(result.newLastUserId))

//         let parsedData: Map<string, Property> = Map({})
//         result.users.forEach((user) => {
//           const userId = Object.keys(user)[0]
//           const userData = user[userId]
//           parsedData = parsedData.set(userId, userData)
//         })
//         dispatch(addPeopleInfo(parsedData))
//       })
//         .catch((error: SocialError) => dispatch(globalActions.showMessage(error.message)))

//     }
//   }
// }

/* _____________ CRUD State _____________ */

/**
 * Add user information
 */
// export const addUserInfo = (uid: string, info: Property) => {
//   return {
//     type: PropertyActionType.ADD_USER_INFO,
//     payload: { uid, info }
//   }
// }

/**
 * Add people information
 */
// export const addPeopleInfo = (infoList: Map<string, Property>) => {
//   return {
//     type: PropertyActionType.ADD_PEOPLE_INFO,
//     payload: infoList
//   }
// }

/**
 * Update user information
 */
export const updateProperties = (uid: string, properties: Property[]) => {
  return {
    type: PropertyActionType.UPDATE_PROPERTIES,
    payload: { uid, properties }
  }
}

// export const clearAllData = () => {
//   return {
//     type: PropertyActionType.CLEAR_ALL_DATA_USER
//   }
// }

/**
 * Open edit profile
 */
// export const openEditProfile = () => {
//   return {
//     type: PropertyActionType.OPEN_EDIT_PROFILE
//   }

// }

/**
 * Close edit profile
 */
// export const closeEditProfile = () => {
//   return {
//     type: PropertyActionType.CLOSE_EDIT_PROFILE
//   }

// }

/**
 * Set profile posts has more data to show
 */
// export const hasMoreDataPeople = () => {
//   return {
//     type: PropertyActionType.HAS_MORE_DATA_PEOPLE
//   }

// }

/**
 * Set profile posts has not data any more to show
 */
// export const notMoreDataPeople = () => {
//   return {
//     type: PropertyActionType.NOT_MORE_DATA_PEOPLE
//   }

// }

/**
 * Set last page request of profile posts
 */
// export const requestPagePeople = (page: number) => {
//   return {
//     type: PropertyActionType.REQUEST_PAGE_PEOPLE,
//     payload: { page}
//   }

// }

/**
 * Set last user identification of find people page
 */
// export const lastUserPeople = (lastUserId: string) => {
//   return {
//     type: PropertyActionType.LAST_USER_PEOPLE,
//     payload: { lastUserId}
//   }

// }
