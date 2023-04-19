import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'ypdAdmin';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    private observer: BreakpointObserver
  ){
    //imports svg icons for navbar
    this.matIconRegistry.addSvgIcon(
      'shirtIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/shirt-solid.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'cardIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/credit-card-fill.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'personIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/person-fill.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'imageIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/image-fill.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'infoIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/info-circle-fill.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mailIcon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/envelope-fill.svg')
    );
  }

  ngAfterViewInit(){
    //collapse side nav if small screen
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }
}
