import { Component, Input, OnInit } from '@angular/core';
import { trashMail } from 'src/app/testdata/trashdata';
import { MailType } from 'src/app/interfaces/mailinterface';

@Component({
  selector: 'app-mailList',
  templateUrl: './mailList.component.html',
  styleUrls: ['./mailList.component.css']
})

export class mailListComponent implements OnInit {

  constructor() {}


  @Input() List!: any;

 isShow = true;
 passedMessage!: string;

 ngOnInit(): void {}

 toggleStatus(obj:MailType) 
 {
  this.isShow = !this.isShow;
  this.passedMessage=obj.message;
 }

 deleteMail(obj:MailType)
 {
  const index=this.List.indexOf(obj);


  if(this.List==trashMail)
  {
    this.List.splice(index,1);
  }
  else
  { 
    this.List.splice(index,1);
    trashMail.push(obj);
   }
 
}

onBack(){
  this.isShow = true;
}
 
}

