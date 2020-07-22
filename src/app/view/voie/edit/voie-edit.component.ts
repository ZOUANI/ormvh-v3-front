import {Component, OnInit} from '@angular/core';
import {VoieService} from '../../../controller/service/Voie.service';
import {VoieVo} from '../../../controller/model/voie.model';
import {UserVo} from '../../../controller/model/User.model';

@Component({
  selector: 'app-voie-edit',
  templateUrl: './voie-edit.component.html',
  styleUrls: ['./voie-edit.component.css']
})
export class VoieEditComponent implements OnInit {
  constructor(private voieService: VoieService) { }

   ngOnInit(): void {
       this.findAllcreatedBys();
       this.findAllupdatedBys();
    }

   get voie(): VoieVo {
    return this.voieService.voie;
  }

   get editableVoies(): Array<VoieVo> {
    return this.voieService.editableVoies;
   }

   set editableVoies(value: Array<VoieVo>) {
    this.voieService.editableVoies = value;
   }

  get createdBys(): Array<UserVo> {
   return this.voieService.createdBys;
  }
  get updatedBys(): Array<UserVo> {
   return this.voieService.updatedBys;
  }

   editVoie() {
    this.voieService.editVoie();
  }
    findAllcreatedBys() {
     this.voieService.findAllcreatedBys();
    }
    findAllupdatedBys() {
     this.voieService.findAllupdatedBys();
    }

     findBylibelle(ref: string) {
      this.voieService.findBylibelle(ref);
     }

    editHide() {
      this.voieService.editHide();
    }
    

}