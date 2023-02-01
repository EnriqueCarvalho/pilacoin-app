import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Pipe } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { UsuariosComponent } from './index/usuarios/usuarios.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarteiraComponent } from './index/carteira/carteira.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    UsuariosComponent,
    CarteiraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
