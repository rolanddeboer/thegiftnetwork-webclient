import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild( "emailInput", { static: false } ) emailInput: ElementRef;
  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }
  onTabChange() {
    setTimeout(() => { if (this.emailInput) this.emailInput.nativeElement.focus() }, 50);
  }
}
