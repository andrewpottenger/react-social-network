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
export const dbGetProperty = (userId: string) => {
  return (dispatch: Function, getState: Function) => {
    const state: Map<string, any>  = getState()
    // let uid: string = state.getIn(['authorize', 'uid'])

    return propertyService.getProperties(userId).then((properties: Property[]) => {
      dispatch(updateProperties(userId, properties))
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

    let updatedProperty: Property = {
      ...newProperty,
      ownerUserId: uid,
    }
    return propertyService.updateProperty(uid, updatedProperty).then(() => {

    })
    .catch((error: SocialError) => dispatch(globalActions.showMessage(error.message)))

  }

}

/* _____________ CRUD State _____________ */

/**
 * Update property
 */
export const updateProperties = (uid: string, properties: Property[]) => {
  return {
    type: PropertyActionType.UPDATE_PROPERTIES,
    payload: { uid, properties }
  }
}
