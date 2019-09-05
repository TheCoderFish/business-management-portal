import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    PortalModule
  ]
})
export class MaterialModule { }
