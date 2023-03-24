
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortadasComponent } from './portadas/portadas.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

import { VideoService } from './video.service';
import { HttpRequestsService } from './http-requests.service';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "post-description/:variable", component: PostComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadasComponent,
    FavoritosComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    VideoService, 
    HttpRequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
