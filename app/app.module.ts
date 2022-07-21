import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { mailListComponent } from './pages/mailList/mailList.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    MailboxComponent,
    mailListComponent,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
