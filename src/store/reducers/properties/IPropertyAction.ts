import { PropertyActionType } from 'constants/propertyActionType'

/**
 *  Property action interface
 * 
 * @export
 * @interface IPropertyAction
 */
export interface IPropertyAction  {
  payload: any,
  type: PropertyActionType

}
