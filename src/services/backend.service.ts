import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, tap } from "rxjs";
import { SiteModel } from "src/models/site.model";
// import { SiteService } from "./site.service";
// import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({providedIn: 'root'})
export class BackendService {

    private FIREBASE_URL:string = 'https://biomap-2f3d1-default-rtdb.firebaseio.com/sites.json';

    constructor(private http:HttpClient) {
    }

    saveData() :void {
        // const sitesData:SiteModel[] = this.siteService.getSites();
        // this.http.put(this.FIREBASE_URL, sitesData).subscribe(res => {
        //     console.log(res);
        // });
    }

    fetchData() {
        // this.http.get<SiteModel[]>(this.FIREBASE_URL).pipe(tap((sites:SiteModel[])=>{
        //     this.siteService.setSites(sites);
        // })).subscribe();
    }
}