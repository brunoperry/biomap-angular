
export class UserModel {
    constructor(
        public id:string='',
        public name:string='',
        public email:string='',
        public sites:string[]=[],
        public settings:any={}
    ) {}
}