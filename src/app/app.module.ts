import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './views/author/author.component';
import { AuthorformComponent } from './views/author/authorform/authorform.component';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { MessageComponent } from './views/message/message.component';
import { DetailComponent } from './views/cart/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorformComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    MessageComponent,
    DetailComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // HttpClient
    // AuthorService
    BsModalRef, BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
