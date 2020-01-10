import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:  [ DataService ]
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('home init', this.dataService.getData())
  }

}
