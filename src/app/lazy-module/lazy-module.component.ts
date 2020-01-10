import { Component, OnInit } from '@angular/core';

import {DataService} from '../services/data.service'

@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.scss']
})
export class LazyModuleComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('lazy loaded module data', this.dataService.getData())
  }

}
