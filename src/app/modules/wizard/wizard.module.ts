import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPortComponent } from './test-port/test-port.component';
import { BusinessDataFormComponent } from './business-data-form/business-data-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestPortComponent, BusinessDataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [TestPortComponent],
  entryComponents: [TestPortComponent, BusinessDataFormComponent]
})
export class WizardModule { }
