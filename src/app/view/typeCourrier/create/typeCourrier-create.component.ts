import {Component, OnInit} from '@angular/core';
import {TypeCourrierService} from '../../../controller/service/TypeCourrier.service';
import {TypeCourrierVo} from '../../../controller/model/typeCourrier.model';

@Component({
  selector: 'app-typeCourrier-create',
  templateUrl: './typeCourrier-create.component.html',
  styleUrls: ['./typeCourrier-create.component.css']
})
export class TypeCourrierCreateComponent implements OnInit {
  constructor(private typeCourrierService: TypeCourrierService) { }

   ngOnInit(): void {
    }

   get typeCourrier(): TypeCourrierVo {
    return this.typeCourrierService.typeCourrier;
  }


   saveTypeCourrier() {
    this.typeCourrierService.saveTypeCourrier();
  }


get typeCourrierShowCreate (): boolean  {
  return this.typeCourrierService.typeCourrierShowCreate;
}

set typeCourrierShowCreate (value: boolean ) {
  this.typeCourrierService.typeCourrierShowCreate = value ;
}
public createHide(){
       this.typeCourrierService.createHide();
}
}