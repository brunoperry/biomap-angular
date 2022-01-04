export class SiteModel {

    constructor(
        public id:number=-1,
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
        public networks:any = {
            facebook: null,
            instagram: null,
            twitter: null
        },
        public media:string[] = [],
        public date:string='',
        public reviews:number[]=[],
        public coords:number[] | undefined = [],
        public images:any[]=[]) {

    }
}