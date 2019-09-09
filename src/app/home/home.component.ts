import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { BusinessDataFormComponent } from '../modules/wizard/business-data-form/business-data-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(CdkPortalOutlet, { static: true })
  portalOutlet: CdkPortalOutlet;

  componentPortal: ComponentPortal<BusinessDataFormComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(BusinessDataFormComponent);
  }

  get portalAttached() {
    return this.portalOutlet.hasAttached();
  }

  attachWizard() {
    this.portalOutlet.attach(this.componentPortal);
  }


  ngOnDestroy() {
    this.portalOutlet.detach();
  }
}
