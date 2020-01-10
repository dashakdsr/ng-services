import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;

  constructor(
    private api: ApiService
  ) { }

  getUsersFromServer (success) {
    return this.api.get(
      {
        url: '/users?per_page=15',
        handlers: {
          success,
          error: this.error.bind(this)
        }
      }
    )
  }

  setData(data) {
    this.data = data;
  }

  getData () {
    return this.data;
  }

  error (error) {
    console.log('error', error)
  }
}
