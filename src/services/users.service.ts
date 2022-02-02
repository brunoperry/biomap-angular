import { EventEmitter, Injectable } from "@angular/core";
import { UserModel } from "src/models/user.model";
import { BackendService } from "./backend.service";
import { SiteService } from "./site.service";

@Injectable({providedIn:'root'})
export class UsersService {

    usersData:UserModel[] = [];

    usersChangedEvent: EventEmitter<UserModel[]> = new EventEmitter();

    currentUser:UserModel = new UserModel();

    constructor(private backendService: BackendService) {
        this.init();
    }

    async init() {
        this.usersData = await this.backendService.getDataFrom('users');
        this.currentUser = this.usersData[0];
        this.usersChangedEvent.emit(this.usersData)
    }

    async getUserByID(id:string) {

        if(this.usersData.length===0) {
            this.usersData = await this.backendService.getDataFrom('users');
        }
        return this.usersData.filter((u)=> u.id===id)[0];
    }
    getUserSettings():void {
        return this.currentUser.settings;
    }
    async saveUserSettings(settings:any) :Promise<void> {
        this.currentUser.settings = settings;
        return await this.backendService.updateData('users', this.currentUser);
    }
}