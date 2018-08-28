import { Property } from 'core/domain/properties'

/**
 * PropertyService service interface
 *
 * @export
 * @interface IPropertyService
 */
export interface IPropertyService {
  // getUserProperty: (userId: string) => Promise<Property>
  getProperties: (userId: string) => Promise<Property[]>
  addProperty: (userId: string, property: Property) => Promise<void>
  updateProperty: (userId: string, property: Property) => Promise<void>
}
