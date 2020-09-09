import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AvatarHelperModule } from 'avatar-helper';
import {AvatarHelperModule} from '../../projects/avatar-helper/src/lib/avatar-helper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
