import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPortComponent } from './test-port/test-port.component';
import { BusinessDataFormComponent } from './business-data-form/business-data-form.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [TestPortComponent, BusinessDataFormComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TestPortComponent],
  entryComponents: [TestPortComponent]
})
export class WizardModule { }
