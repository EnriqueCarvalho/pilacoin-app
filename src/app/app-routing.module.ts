import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path:'index',
    pathMatch: 'full',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
