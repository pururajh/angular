import { Injectable } from '@angular/core';

@Injectable()
export class PostalAddressService {
  address = {
    houseNo: '27',
    addressLine1: '18th Mail, 3rd B crooss',
    addressLine2: '',
    city: 'Bangalore',
    state: 'Karnataka',
    zip: '560076',
    country: 'India'
  }

  constructor() { }
  success () {
    return 'successful';
  }

}
