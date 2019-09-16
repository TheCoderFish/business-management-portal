import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDataFormComponent } from './business-data-form/business-data-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [BusinessDataFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [],
  entryComponents: [BusinessDataFormComponent]
})
export class WizardModule { }
