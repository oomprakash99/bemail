import { Component, OnDestroy, OnInit } from '@angular/core';
import { inboxMail } from 'src/app/testdata/inboxdata';
import { sentMail } from 'src/app/testdata/sentdata';
import { trashMail } from 'src/app/testdata/trashdata';
@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  constructor() {}
  
importedInbox=inboxMail;
importedSent=sentMail;
importedTrash=trashMail;


selectedCmponent='inbox';
 

  ngOnInit(): void {}
}

