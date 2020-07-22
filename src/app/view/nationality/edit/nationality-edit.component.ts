import {Component, OnInit} from '@angular/core';
import {NationalityService} from '../../../controller/service/Nationality.service';
import {NationalityVo} from '../../../controller/model/nationality.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-nationality-edit',
  templateUrl: './nationality-edit.component.html',
  styleUrls: ['./nationality-edit.component.css']
})
export class NationalityEditComponent implements OnInit {
  constructor(private nationalityService: NationalityService) { }

   ngOnInit(): void {
       this.findAllupdatedBys();
       this.findAllcreatedBys();
    }

   get nationality(): NationalityVo {
    return this.nationalityService.nationality;
  }

   get editableNationalitys(): Array<NationalityVo> {
    return this.nationalityService.editableNationalitys;
   }

   set editableNationalitys(value: Array<NationalityVo>) {
    this.nationalityService.editableNationalitys = value;
   }

  get updatedBys(): Array<UserVo> {
   return this.nationalityService.updatedBys;
  }
  get createdBys(): Array<UserVo> {
   return this.nationalityService.createdBys;
  }

   editNationality() {
    this.nationalityService.editNationality();
  }
    findAllupdatedBys() {
     this.nationalityService.findAllupdatedBys();
    }
    findAllcreatedBys() {
     this.nationalityService.findAllcreatedBys();
    }

     findBylibelle(ref: string) {
      this.nationalityService.findBylibelle(ref);
     }

    editHide() {
      this.nationalityService.editHide();
    }
    

}