import { Property } from 'src/core/domain/properties'
import { Map } from 'immutable'

/**
 *  Property state
 * 
 * @export
 * @class PropertyState
 */
export class PropertyState  {

  /**
   * The list of users notification
   */
  properties = Map({})

  /**
   * If user notifications are loaded {true} or not {false}
   */
  loaded: Boolean = false
}