import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('menu') menu!: ElementRef;
  private offcanvas?: any;

  constructor(private router: Router) {}

  async openMenu() {
    if (typeof document !== 'undefined') {
      const { Offcanvas } = await import('bootstrap');
      this.offcanvas = new Offcanvas(this.menu.nativeElement);
      this.offcanvas.show();
    }
  }

  navigateTo(route: string) {
    if (this.offcanvas) {
      this.offcanvas.hide();
    }
    this.router.navigate([route]);
  }

}
