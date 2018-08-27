import { BaseDomain } from 'core/domain/common'

export class Property extends BaseDomain {
  constructor (
    public ownerUserId: string,
    public profileImage: string,
    public showcaseImages: string[],
    public name: string,
    public address: string,
    public city: string,
    public state: string,
    public zip: string,
    public location: string,
    public aboutHouse: string,
    public aboutNeighborhood: string,
    public square: string,
    public beds: string,
    public baths: string,
    public yearPurchased: string,
    public nearBySchools: string,
    public lotSize: string,
    public pros: string,
    public cons: string,
    public visibleToAll: string,
    public changes: string,
  ) {
    super()

  }

}
