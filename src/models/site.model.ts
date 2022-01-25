export class SiteModel {

    constructor(
        public id:string='',
        public title:string='',
        public type:string='',
        public rating:number=-1,
        public img:string='',
        public mapImg:string='',
        public description:string='',
        public phone:string='',
        public address:string='',
        public email:string='',
        public website:string='',
        public facebook:string='',
        public instagram:string='',
        public twitter:string='',
        public media:string[] = [],
        public date:string='',
        public reviews:number[]=[],
        public coords:number[] = []) {

    }
}