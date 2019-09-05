import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortalModule,
    CdkStepperModule
  ],
  exports: [
    PortalModule,
  ]
})
export class MaterialModule { }
