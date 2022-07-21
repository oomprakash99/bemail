import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';

const routes: Routes = [
  {path:'login', component: LoginpageComponent},
  {path:'', component: LoginpageComponent},
  {path:'mailbox',component:MailboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
