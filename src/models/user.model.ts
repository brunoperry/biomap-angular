
export class UserModel {
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public sites:number[],
        public settings:any
    ) {}
}