import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonServices } from './services';
import { CommonComponents } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ...CommonComponents
  ],
  exports: [
    ...CommonComponents
  ],
  providers: [
      ...CommonServices,
  ]
})
export class CommonComponentsModule {}
