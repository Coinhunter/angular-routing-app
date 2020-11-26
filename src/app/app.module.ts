import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FirstSecondComponent } from './first-second/first-second.component';
import { FirstFirstComponent } from './first-first/first-first.component';
import { SecondFirstComponent } from './second-first/second-first.component';
import { SecondSecondComponent } from './second-second/second-second.component';
import { FirstSecondSecondComponent } from './first-second-second/first-second-second.component';
import { SecondSecondSecondComponent } from './second-second-second/second-second-second.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstSecondComponent,
    FirstFirstComponent,
    SecondFirstComponent,
    SecondSecondComponent,
    FirstSecondSecondComponent,
    SecondSecondSecondComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
