import { Injectable } from "@angular/core";
import { UserModel } from "src/models/user.model";
import { SiteService } from "./site.service";

@Injectable({providedIn:'root'})
export class UsersService {

    usersData:UserModel[] = [
        new UserModel(
            0,
            'bruno',
            'bruno@email.com',
            [0,1]
        ),
        new UserModel(
            1,
            'perry',
            'perry@email.com',
            [2]
        )
    ]

    currentUser:UserModel = this.usersData[0];

    constructor(private siteService:SiteService) {

    }

    getUser(id:number):UserModel {
        return this.usersData[id];
    }
    getUserSites(sitesID:number[]):any[] {

        let out:any[] = [];

        const sitesData= this.siteService.getSites();
        sitesID.forEach(siteID => {
            const site = sitesData.filter(s=>s.id===siteID);
            if(site) out.push(site[0]);
        });
        return out;
    }

    getSiteTitle(id:number):string | undefined {
        return this.siteService.getSite(id)?.title;
    }
}