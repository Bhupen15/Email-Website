import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { AdminComponent } from './admin/admin.component';
// import { ApplyComponent } from './apply/apply.component';
import { AuthguardGuard } from './authguard.guard';
import { RoleguardGuard } from './roleguard.guard';
import { EmailComponent } from './email/email.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentitemComponent } from './sentitem/sentitem.component';

const routes: Routes = [
  {
    component:RegisterComponent,
    path:"register"
  },
  {
    component:LoginComponent,
    path:""
  },
  {
    component:EmailComponent,
    path:"email"
  },
  {
    component:InboxComponent,
    path:"inbox"
  },
  {
    component: SentitemComponent,
    path:"sentitem"
  }
  // {
  //   component:HomeComponent,
  //   path:""
  // },
  // {
  //   component:UserComponent,
  //   path:"user",
  //   data:{role:'0'},
  //   canActivate:[AuthguardGuard] 
  //   // canActivate:[RoleguardGuard]
  // },
  // {
  //   component:AdminComponent,
  //   path:"admin",
  //   data:{role:'1'},
  //   canActivate:[AuthguardGuard]
  // },
  // {
  //   component:ApplyComponent,
  //   path:"apply",
  //   data:{role:'0'},
  //   canActivate:[AuthguardGuard]
  // }

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
