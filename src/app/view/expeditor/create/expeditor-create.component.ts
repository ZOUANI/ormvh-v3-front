import {Component, OnInit} from '@angular/core';
import {ExpeditorService} from '../../../controller/service/Expeditor.service';
import {ExpeditorVo} from '../../../controller/model/expeditor.model';
import {UserVo} from '../../../controller/model/User.model';
import {SexeVo} from '../../../controller/model/Sexe.model';
import {NationalityVo} from '../../../controller/model/Nationality.model';

@Component({
  selector: 'app-expeditor-create',
  templateUrl: './expeditor-create.component.html',
  styleUrls: ['./expeditor-create.component.css']
})
export class ExpeditorCreateComponent implements OnInit {
  constructor(private expeditorService: ExpeditorService) { }

   ngOnInit(): void {
      this.findAllsexes();
      this.findAllnationalitys();
      this.findAllcreatedBys();
      this.findAllupdatedBys();
    }

   get expeditor(): ExpeditorVo {
    return this.expeditorService.expeditor;
  }

  get sexes(): Array<SexeVo> {
   return this.expeditorService.sexes;
  }
  get nationalitys(): Array<NationalityVo> {
   return this.expeditorService.nationalitys;
  }
  get createdBys(): Array<UserVo> {
   return this.expeditorService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.expeditorService.updatedBys;
  }

   saveExpeditor() {
    this.expeditorService.saveExpeditor();
  }

   findAllsexes() {
     this.expeditorService.findAllsexes();
   }
   findAllnationalitys() {
     this.expeditorService.findAllnationalitys();
   }
   findAllcreatedBys() {
     this.expeditorService.findAllcreatedBys();
   }
   findAllupdatedBys() {
     this.expeditorService.findAllupdatedBys();
   }

}