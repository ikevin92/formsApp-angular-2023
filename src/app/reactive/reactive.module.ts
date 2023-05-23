import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { SwitchesPagesComponent } from './pages/switches-pages/switches-pages.component';
import { DynamicPagesComponent } from './pages/dynamic-pages/dynamic-pages.component';


@NgModule({
  declarations: [
    BasicPagesComponent,
    SwitchesPagesComponent,
    DynamicPagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
