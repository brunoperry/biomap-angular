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
            [0,1],
            {
                notifications: true,
                location: false,
                newsletter: true,
                language: 'eng',
                mapStyle: 'graphic'
            }
        ),
        new UserModel(
            1,
            'perry',
            'perry@email.com',
            [2],
            {
                notifications: false,
                location: false,
                newsletter: false,
                language: 'pt',
                mapStyle: 'terrain'
            }
        )
    ]

    currentUser:UserModel = this.usersData[0];

    constructor(private siteService:SiteService) {}

    getUser(id:number):UserModel {
        return this.usersData[id];
    }
    getUserSites(sitesID:number[]):any[] {

        let out:any[] = [];

        const sitesData= this.siteService.getSites();
            console.log(sitesData);
        sitesID.forEach(siteID => {
            const site = sitesData.filter(s=>s.id===siteID);

            if(site) out.push(site);
        });
        return out;
    }
    getUserSettings():void {
        return this.currentUser.settings;
    }
    saveUserSettings(settings:any) :void {
        this.currentUser.settings = settings;
    }
    getSiteTitle(id:number):string | undefined {

        return undefined;
        // return this.siteService.getSite(id)?.title;
    }
}