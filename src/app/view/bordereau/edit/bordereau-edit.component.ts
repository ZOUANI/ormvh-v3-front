import {Component, OnInit} from '@angular/core';
import {BordereauService} from '../../../controller/service/Bordereau.service';
import {BordereauVo} from '../../../controller/model/bordereau.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-bordereau-edit',
  templateUrl: './bordereau-edit.component.html',
  styleUrls: ['./bordereau-edit.component.css']
})
export class BordereauEditComponent implements OnInit {
  constructor(private bordereauService: BordereauService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get bordereau(): BordereauVo {
    return this.bordereauService.bordereau;
  }

   get editableBordereaus(): Array<BordereauVo> {
    return this.bordereauService.editableBordereaus;
   }

   set editableBordereaus(value: Array<BordereauVo>) {
    this.bordereauService.editableBordereaus = value;
   }

  get createdBys(): Array<UserVo> {
   return this.bordereauService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.bordereauService.updatedBys;
  }

   editBordereau() {
    this.bordereauService.editBordereau();
  }
    findAllcreatedBys() {
     this.bordereauService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.bordereauService.findAllupdatedBys();
    }

     findBylibelle(ref: string) {
      this.bordereauService.findBylibelle(ref);
     }

    editHide() {
      this.bordereauService.editHide();
    }
    

}