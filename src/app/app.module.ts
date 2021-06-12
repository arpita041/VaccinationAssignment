import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailByPinComponent } from './detail-by-pin/detail-by-pin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailByStateComponent } from './detail-by-state/detail-by-state.component';
import { CalanderComponent } from './calander/calander.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailByPinComponent,
    HomeComponent,
    DetailByStateComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
