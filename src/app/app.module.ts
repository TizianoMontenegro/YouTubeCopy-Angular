import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadasComponent } from './portadas/portadas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CardComponent } from './card/card.component';

import { VideoService } from './video.service';
import { HttpRequestsService } from './http-requests.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadasComponent,
    FavoritosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VideoService, 
    HttpRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
