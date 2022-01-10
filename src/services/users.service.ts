import { EventEmitter, Injectable } from "@angular/core";
import { UserModel } from "src/models/user.model";
import { BackendService } from "./backend.service";
import { SiteService } from "./site.service";

@Injectable({providedIn:'root'})
export class UsersService {

    usersData:UserModel[] = [];

    // usersData:UserModel[] = [
    //     new UserModel(
    //         '',
    //         'bruno',
    //         'bruno@email.com',
    //         ['lXoplrDsD1UBc5UyR2BD'],
    //         {
    //             notifications: true,
    //             location: false,
    //             newsletter: true,
    //             language: 'eng',
    //             mapStyle: 'graphic'
    //         }
    //     ),
    //     new UserModel(
    //         '',
    //         'perry',
    //         'perry@email.com',
    //         ['edae4c1pUQqx4Tk2aEkE', 'IgL5YjfaH75Wj1rUh9V9'],
    //         {
    //             notifications: false,
    //             location: false,
    //             newsletter: false,
    //             language: 'pt',
    //             mapStyle: 'terrain'
    //         }
    //     )
    // ];


    usersChangedEvent: EventEmitter<UserModel> = new EventEmitter();

    currentUser:UserModel = new UserModel('','','',[],{});

    constructor(private backendService: BackendService) {
        this.backendService.getDataFrom('users').subscribe((res:UserModel[]) => {
            this.currentUser = res[0];
            this.usersChangedEvent.emit(this.currentUser);
        });
    }

    getUserByID(id:number):UserModel {
        return this.usersData[id];
    }
    getUserSettings():void {
        return this.currentUser.settings;
    }
    saveUserSettings(settings:any) :void {
        this.currentUser.settings = settings;
    }
}