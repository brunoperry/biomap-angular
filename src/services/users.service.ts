import { EventEmitter, Injectable } from "@angular/core";
import { UserModel } from "src/models/user.model";
import { BackendService } from "./backend.service";
import { SiteService } from "./site.service";

@Injectable({providedIn:'root'})
export class UsersService {

    usersData:UserModel[] = [];

    usersChangedEvent: EventEmitter<UserModel> = new EventEmitter();

    currentUser:UserModel = new UserModel('','','',[],null);

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
    async saveUserSettings(settings:any) :Promise<void> {
        this.currentUser.settings = settings;
        return await this.backendService.updateData('users', this.currentUser);
    }
}