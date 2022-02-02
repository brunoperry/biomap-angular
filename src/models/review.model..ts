export class ReviewModel {

    constructor(
        public userID: number = -1,
        public id:number=-1,
        public rating:number=-1,
        public text:string='',
        public date:string='') {}
}