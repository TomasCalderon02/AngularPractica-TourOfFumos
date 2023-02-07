import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FumosComponent } from './fumos/fumos.component';
import { FumoDetailComponent } from './fumo-detail/fumo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FumoSearchComponent } from './fumo-search/fumo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FumosComponent,
    FumoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FumoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
