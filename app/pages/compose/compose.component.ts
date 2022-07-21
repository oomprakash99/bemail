import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { sentMail } from 'src/app/testdata/sentdata';
import{MessageService} from 'primeng/api';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})


export class ComposeComponent implements OnInit {
  composedMessage = [] as any;
 
  composeEmail: string = '';
  composeSubject: string = '';
  composeMessage: string = '';
  importedSentMail: any;
  constructor(private messageService: MessageService) { }
  
  ngOnInit(): void { }

  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }
  // composeSendMail(){
  //   console.log(this.composeEmail+this.composeSubject+this.composeMessage);
  // }
  pushData() {
    
    const sender = this.composeEmail
    const subject = this.composeSubject
    const message = this.composeMessage

    this.importedSentMail = sentMail;

    this.importedSentMail.push(
      {
        sender: sender,
        subject: subject,
        message: message,
      });   
      this.composeEmail='';
      this.composeMessage='';
      this.composeSubject='';

      this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'})
      timeout(1000);
  }

}

