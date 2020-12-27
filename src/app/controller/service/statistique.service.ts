import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StatistiqueVo} from "../model/statistique-vo.model";

@Injectable({
    providedIn: 'root'
})
export class StatistiqueService {
    private _statistiqueVo: StatistiqueVo;

    get statistiqueVo(): StatistiqueVo {
        if (this._statistiqueVo == null) {
            this._statistiqueVo = new StatistiqueVo();

        }
        return this._statistiqueVo;
    }

    set statistiqueVo(value: StatistiqueVo) {
        this._statistiqueVo = value;
    }

    constructor(private http: HttpClient) {
    }

    courrierByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByNatureClient', this.statistiqueVo);
    }
    countCourrierByNatureClientTrimestre() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByNatureClientTrimestre', this.statistiqueVo);
    }

    courrierByService() {
        console.log(this.statistiqueVo)
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByService', this.statistiqueVo);
    }

    courrierByExpeditorSex() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByExpeditorSex', this.statistiqueVo);
    }

    courrierByDestinatorSex() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByDestinatorSex', this.statistiqueVo);
    }

    courrierAcceptedBySubject() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierAcceptedBySubject', this.statistiqueVo);
    }

    courrierBySubject() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierBySubject', this.statistiqueVo);
    }

    courrierByVoie() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByVoie', this.statistiqueVo);
    }

    courrierByEtatEval() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByEtatEval', this.statistiqueVo);
    }

    courrierRefusedBySubject() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRefusedBySubject', this.statistiqueVo);
    }

    courrierAcceptedByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierAcceptedByNatureClient', this.statistiqueVo);
    }

    courrierRefusedByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRefusedByNatureClient', this.statistiqueVo);
    }

    courrierRefusedByReason() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRefusedByReason', this.statistiqueVo);
    }

    courrierTraiteByServiceEmeteur() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierTraiteByServiceEmeteur', this.statistiqueVo);
    }

    courrierTraiteByServiceCoord() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierTraiteByServiceCoord', this.statistiqueVo);
    }

    courrierTraiteByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierTraiteByNatureClient', this.statistiqueVo);
    }

    courrierTraiteByService() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierTraiteByService', this.statistiqueVo);
    }

    courrierByServiceEmeteur() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByServiceEmeteur', this.statistiqueVo);
    }

    courrierByServiceCoord() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByServiceCoord', this.statistiqueVo);
    }

    courrierByDestinatorTrancheAge() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByDestinatorTrancheAge', this.statistiqueVo);
    }

    courrierByExpeditorTrancheAge() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByExpeditorTrancheAge', this.statistiqueVo);
    }

    courrierRejeteNonConformeReponduByService() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRejeteNonConformeReponduByService', this.statistiqueVo);
    }

    courrierByRejeteNonConformeReponduByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRejeteNonConformeReponduByNatureClient', this.statistiqueVo);
    }

    courrierByRejeteNonConformeSansReponceByService() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRejeteNonConformeSansReponceByService', this.statistiqueVo);
    }

    courrierByRejeteNonConformeSansReponceByNatureClient() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierRejeteNonConformeSansReponceByNatureClient', this.statistiqueVo);
    }
    courrierByPhaseAdmin() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByPhaseAdministrative', this.statistiqueVo);
    }
    courrierByExpeditorNationality() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByExpeditorNationality', this.statistiqueVo);
    }

    courrierByDestinatorNationality() {
        return this.http.post('http://localhost:8080/generated/statistique/countCourrierByDestinatorNationality', this.statistiqueVo);
    }

}
