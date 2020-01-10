import { Injectable } from '@angular/core';

@Injectable()
export class SizeService {
  size: number;

  constructor() { }

  getSize() {
    console.log('get size')
    return this.size;
  }


  setSize (size) {
    this.size = size;
  }
}
