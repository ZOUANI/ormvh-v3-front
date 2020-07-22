import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../controller/service/Sexe.service';
import {SexeVo} from '../../../controller/model/sexe.model';

@Component({
  selector: 'app-sexe-edit',
  templateUrl: './sexe-edit.component.html',
  styleUrls: ['./sexe-edit.component.css']
})
export class SexeEditComponent implements OnInit {
  constructor(private sexeService: SexeService) { }

   ngOnInit(): void {
    }

   get sexe(): SexeVo {
    return this.sexeService.sexe;
  }

   get editableSexes(): Array<SexeVo> {
    return this.sexeService.editableSexes;
   }

   set editableSexes(value: Array<SexeVo>) {
    this.sexeService.editableSexes = value;
   }


   editSexe() {
    this.sexeService.editSexe();
  }

     findBylibelle(ref: string) {
      this.sexeService.findBylibelle(ref);
     }

    editHide() {
      this.sexeService.editHide();
    }
    

}