import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FotosComponent } from './fotos/fotos.component';
import { appRoutingModule } from './app-routing.module';
import { HeaderFotosComponent } from './fotos/header-fotos/header-fotos.component';
import { BodyFotosComponent } from './fotos/body-fotos/body-fotos.component';
import { TopComponent } from './fotos/body-fotos/top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    VideoComponent,
    FotosComponent,
    HeaderFotosComponent,
    BodyFotosComponent,
    TopComponent    
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
