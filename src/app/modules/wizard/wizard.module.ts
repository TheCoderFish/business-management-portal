import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPortComponent } from './test-port/test-port.component';

@NgModule({
  declarations: [TestPortComponent],
  imports: [
    CommonModule
  ],
  exports: [TestPortComponent],
  entryComponents: [TestPortComponent]
})
export class WizardModule { }
