import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service'
import { CookiesService } from './services/cookie.service'

// import { SizeService } from './customers/services/size.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example-app';
  data: any;

  constructor(
    private dataService: DataService,
    private cookiesService: CookiesService
    // private sizeService: SizeService
  ) {}

  ngOnInit () {

    this.cookiesService.setCookie('test', 'test', 300)
    console.log(this.cookiesService.getCookie('test'))
    this.dataService.getUsersFromServer((data) => {
      console.log('data', data)
      this.data = data;
      this.dataService.setData(data);
    })
  }
}
