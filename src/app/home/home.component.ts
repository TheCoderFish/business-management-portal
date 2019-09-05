import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Portal, ComponentPortal, CdkPortalOutlet, CdkPortal } from '@angular/cdk/portal';
import { TestPortComponent } from '../modules/wizard/test-port/test-port.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(CdkPortalOutlet)
  portalOutlet: CdkPortalOutlet;

  componentPortal: ComponentPortal<TestPortComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(TestPortComponent);
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
