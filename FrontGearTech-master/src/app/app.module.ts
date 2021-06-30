import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { HeaderComponent } from './Templates/header/header.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { ProductoComponent } from './Views/producto/producto.component';
import { NosotrosComponent } from './Views/nosotros/nosotros.component';
import { HeadComponent } from './Templates/head/head.component';
import { CarritoComponent } from './Views/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Templates/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavComponent } from './Templates/sidenav/sidenav.component';
import {MatTableModule} from '@angular/material/table';
import { NewEditProductComponent } from './Views/newEditProduct/newEditProduct.component';
import { ProductsComponent } from './Views/products/products.component';
import { ProductsFormComponent } from './Views/products/products-form/products-form.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
//import "./style.css";

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
    CarritoComponent,
    NavbarComponent,
    SidenavComponent,
    NewEditProductComponent,
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
