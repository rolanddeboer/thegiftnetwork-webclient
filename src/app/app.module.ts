import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  { path: '', component: HomeComponent, data: {animation: 'AboutPage'}  },
  { path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent, data: {animation: 'About1Page'}  },
  { path: '**', component: PageNotFoundComponent, data: {animation: 'About2Page'}  }
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
      appRoutes
    ),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbTabsetModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
