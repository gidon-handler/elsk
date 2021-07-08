import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

export const CURRENT_USER = new InjectionToken('curentUser');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: CURRENT_USER, useValue: {currentUser: undefined}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
