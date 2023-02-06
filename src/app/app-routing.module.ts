import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FumosComponent } from './fumos/fumos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FumoDetailComponent } from './fumo-detail/fumo-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'fumos',component: FumosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: FumoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
