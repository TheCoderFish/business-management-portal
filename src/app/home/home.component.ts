import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ComponentPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { BusinessDataFormComponent } from '../modules/wizard/business-data-form/business-data-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortalOutlet, { static: true })
  private portalOutlet: CdkPortalOutlet;

  private componentPortal: ComponentPortal<BusinessDataFormComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(BusinessDataFormComponent);
  }

  get portalAttached(): boolean {
    return this.portalOutlet.hasAttached();
  }

  private attachWizard(): void {
    this.portalOutlet.attach(this.componentPortal);
  }

  ngOnDestroy(): void {
    this.portalOutlet.detach();
  }
}

