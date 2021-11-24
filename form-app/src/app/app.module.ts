import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MultByPipe } from './pipes/mult-by.pipe';
 //import { AppCounterService } from './services/app-counter.service'







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //AppCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



