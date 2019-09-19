import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild( "emailInput", { static: false } ) emailInput: ElementRef;
  @ViewChild( "loginBox", { static: false } ) loginBox: ElementRef;
  loggingIn = false;

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  onTabChange() {
    setTimeout(() => { if (this.emailInput) this.emailInput.nativeElement.focus() }, 50);
  }
  
  loginClick() {
    this.loggingIn = true;
  }

}
