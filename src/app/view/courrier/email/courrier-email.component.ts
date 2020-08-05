import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

import { CourrierService } from 'src/app/controller/service/Courrier.service';
import { CourrierVo } from 'src/app/controller/model/Courrier.model';

@Component({
  selector: 'app-courrier-email',
  templateUrl: './courrier-email.component.html',
  styleUrls: ['./courrier-email.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CourrierEmailComponent implements OnInit {
 
    email :string;
    subject:string;
    body :string;

  constructor(private courrierService: CourrierService) {}
  
  ngOnInit(): void {
    // default values 
    
    this.email = "ormvah@gmail.com";
  
  }
  get showSendEmailDialog():boolean{
      return this.courrierService.showEmailDialog;
  }
  set showSendEmailDialog(value:boolean){
      this.courrierService.showEmailDialog = value;
  }
  showDialog(){
    this.subject = this.courrierService.selectedCourrier.subject;
    this.body = this.courrierService.selectedCourrier.description;
  }
  sendEmail(){
      this.courrierService.sendEmail(this.email,this.subject,this.body);
  }
}