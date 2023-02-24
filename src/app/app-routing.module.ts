import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  {
    component:RegisterComponent,
    path:"register"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:HomeComponent,
    path:""
  },
  {
    component:UserComponent,
    path:"user"
  },
  {
    component:AdminComponent,
    path:"admin"
  },
  {
    component:ApplyComponent,
    path:"apply"
  }

];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModuleng serve

//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
