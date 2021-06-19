import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { FooterComponent } from './Views/footer/footer.component';
import { HeaderComponent } from './Views/header/header.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { ProductoComponent } from './Views/producto/producto.component';
import { NosotrosComponent } from './Views/nosotros/nosotros.component';
import { HeadComponent } from './Views/head/head.component';
import { CarritoComponent } from './Views/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,
    ProductoComponent,
    NosotrosComponent,
    HeadComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
