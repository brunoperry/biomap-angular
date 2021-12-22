export class ReviewModel {

    constructor(
        public userID: number,
        public id:number,
        public rating:number,
        public text:string,
        public date:string) {}
}