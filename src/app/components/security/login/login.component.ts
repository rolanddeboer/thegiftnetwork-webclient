import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { SettingsService } from 'src/app/services/config/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild( "emailInput", { static: false } ) emailInput: ElementRef;
  @ViewChild( "loginBox", { static: false } ) loginBox: ElementRef;
  loggingIn = false;
  buzzing = false;
  password: string;
  email: string;
  errorMessage: string;

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  onTabChange() {
    setTimeout(() => { if (this.emailInput) this.emailInput.nativeElement.focus() }, 50);
  }
  
  loginClick() {
    if (!this.email || !this.password) {
      this.errorMessage = "Please fill in email and password";
      this.buzzABit();
      this.emailInput.nativeElement.focus();
      return;
    }
    this.errorMessage = "";
    this.loggingIn = true;
    const url = "/server/login";
    const data = {
      username: this.email,
      password: this.password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true
    };
    this.http.post<any>(url, data, httpOptions)
    .pipe(
      retry(3),
      catchError(error => { 
        this.errorMessage = "Password or email address incorrect";
        this.loggingIn = false;
        this.buzzABit();
        return throwError(""); 
      })
    ).subscribe(data => {
      this.settings.username = data.username;
      this.settings.roles = data.roles;
      setTimeout(() => { this.loggingIn = false }, 250);
      this.router.navigate(['/'])
      // console.log(data);
    });;
  }

  buzzABit() {
    this.buzzing = true;
    setTimeout(() => { this.buzzing = false }, 300);
  }

}
