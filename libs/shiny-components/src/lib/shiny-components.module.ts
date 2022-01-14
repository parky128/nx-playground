import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyShinyComponentComponent } from './my-shiny-component/my-shiny-component.component';
import { CommonComponentsModule } from '@rob/common-components';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule],
  declarations: [
    MyShinyComponentComponent
  ],
})
export class ShinyComponentsModule {}
