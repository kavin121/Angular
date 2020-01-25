import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatToolbarModule,MatIconModule,MatMenuModule,MatCardModule,MatListModule,MatSidenavModule} from '@angular/material';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  {path:'one',component:OneComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatSidenavModule,
    MatToolbarModule,MatIconModule,MatMenuModule,MatCardModule,MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
