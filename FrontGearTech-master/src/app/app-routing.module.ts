import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { HeaderComponent } from './Templates/header/header.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { NosotrosComponent } from './Views/nosotros/nosotros.component';
import { NewEditProductComponent } from './Views/newEditProduct/newEditProduct.component';

const routes: Routes = [
  {path: '', redirectTo: '/Dashboard', pathMatch:'full' },
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Header', component:HeaderComponent},  
  {path: 'Footer', component:FooterComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Register', component:RegisterComponent},
  {path: 'Products', component:ProductosComponent},
  {path: 'NewEditProduct/:idProduct', component:NewEditProductComponent},
  //{path: 'NewEditProduct', component:NewEditProductComponent},
  {path: 'Nosotros', component:NosotrosComponent}
,  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
