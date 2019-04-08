import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CakeService } from './cake.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
