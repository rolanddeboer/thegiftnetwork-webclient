import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { AutofocusDirective } from './directives/various/autofocus.directive';
import { HomeComponent } from './components/main/home/home.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { LoginComponent } from './components/security/login/login.component';
import { HeaderComponent } from './components/main/header/header.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'}  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent, data: {animation: 'AboutPage'}  }
];

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbTabsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
