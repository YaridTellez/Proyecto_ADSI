import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { FooterComponent } from './Views/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/Dashboard', pathMatch:'full' },
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Footer', component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
