import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeadersComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeadersComponent,
    PopoverInfoComponent
  ]
  ,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
