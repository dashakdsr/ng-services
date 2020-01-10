import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyModuleComponent } from './lazy-module.component';

import {SizeService} from './services/size.service'

@NgModule({
  declarations: [LazyModuleComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule
  ],
  providers: [
    SizeService
  ]
})
export class LazyModuleModule { }
