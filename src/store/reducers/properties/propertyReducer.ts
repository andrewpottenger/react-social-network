// - Import react components
import moment from 'moment/moment'
import _ from 'lodash'
import { Map } from 'immutable'

// - Import domain
import { Notification } from 'src/core/domain/notifications'

// - Import action types
import { PropertyActionType } from 'constants/propertyActionType'

import { PropertyState } from './PropertyState'
import { IPropertyAction } from './IPropertyAction'

/**
 * Notify actions
 * @param {object} state
 * @param {object} action
 */
export let propertyReducer = (state = Map(new PropertyState()), action: IPropertyAction) => {
  let { payload } = action
  switch (action.type) {

    /* _____________ CRUD _____________ */
    case PropertyActionType.UPDATE_PROPERTIES:
      return state
        .set('properties', payload.properties)
        .set('loaded', true)

    // case NotificationActionType.ADD_NOTIFY_LIST:
    // return state
    // .set('userNotifies', payload)
    // .set('loaded', true)

    // case NotificationActionType.SEEN_NOTIFY:
    // return state
    // .setIn(['userNotifies', payload, 'isSeen'], true)
    // .set('loaded', true)

    // case NotificationActionType.DELETE_NOTIFY:
    // return state
    // .deleteIn(['userNotifies', payload])

    // case NotificationActionType.CLEAR_ALL_DATA_NOTIFY:
    //   return Map(new PropertyState())

    default:
      return state

  }

}
