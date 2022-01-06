import { EventEmitter, Injectable } from "@angular/core"
import { SiteModel } from "src/models/site.model";
import { BackendService } from "./backend.service";


@Injectable({providedIn:'root'})
export class SiteService {

  sitesData:SiteModel[] = [];
  sitesChangedEvent: EventEmitter<SiteModel[]> = new EventEmitter();

  constructor(private backendService:BackendService) {
    this.backendService.getDataFrom('sites').subscribe((res:SiteModel[]) => {
      this.sitesData = res;
      this.sitesChangedEvent.emit(this.sitesData);
      console.log(this.sitesData);
      
    });
  }

  getSites(): SiteModel[] {
    return this.sitesData;
  }
 
  getSiteById(id:number):SiteModel | undefined {
    return this.sitesData.find(site => site.id === id);
  }
 
  async addSite(site: SiteModel) {

    if(site.media.length > 0) {
      const uploadURL = await this.backendService.uploadImages(site.media);
      site.img = uploadURL;
      site.media = [uploadURL];
    }
    await this.backendService.saveData('sites', site);
  }

  async deleteSite(site: SiteModel) {
    return await this.backendService.deleteDataByID('sites', site.id);
  }
 
  
 
  // updateSite(site: SiteModel) {
  //   const noteDocRef = doc(this.firestore, `sites/${site.id}`);
  //   return updateDoc(noteDocRef, { site });
  // }

  // DB_PATH = 'https://biomap-2f3d1-default-rtdb.firebaseio.com';

  // sitesChangedEvent: EventEmitter<SiteModel[]> = new EventEmitter();
  // sitesData:SiteModel[] = [

  //       // new SiteModel(
  //       //   0,
  //       // 'Quinta da marinha',
  //       // 'farm',
  //       // 2,
  //       // 'https://www.gardeningknowhow.com/wp-content/uploads/2016/03/surplus-veggies.jpg',
  //       // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
  //       // 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  //       // '+351 94 3453434',
  //       // 'street A',
  //       // 'info@quintadmarinha.com',
  //       // 'www.quintadosol.com',
  //       // {
  //       //   facebook: 'facebook link',
  //       //   instagram: 'nistagram link'
  //       // },
  //       // ['image1', 'image2'],
  //       // '02 Jan 2019',
  //       // [0,2],
  //       // [37.82474,-8.65186]),
  //       // new SiteModel(
  //       //   1,
  //       // 'Quinta do Sol',
  //       // 'farm',
  //       // 5,
  //       // 'https://cdn.vox-cdn.com/thumbor/wNCd1cBf7MrId4a_2IT-XmcfygY=/0x0:5114x3414/1200x800/filters:focal(2148x1298:2966x2116)/cdn.vox-cdn.com/uploads/chorus_image/image/64713096/shutterstock_1106746100.0.jpg',
  //       // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
  //       // 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  //       // '+351 94 3212124',
  //       // 'street B',
  //       // 'quintadosol@quintadosol.com',
  //       // 'www.quintadosol.com',
  //       // {
  //       //   facebook: 'facebook link',
  //       //   instagram: 'nistagram link',
  //       //   twitter: 'twitter link'
  //       // },
  //       // // ['facebook', 'instagram'],
  //       // ['image1', 'image2'],
  //       // '12 Jan 2021',
  //       // [1,3],
  //       // [39.64369,-4.41705]),
  //       // new SiteModel(
  //       //   2,
  //       // 'Quinta da Alfarroba',
  //       // 'restaurant',
  //       // 5,
  //       // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.masslive.com%2Fresizer%2FYroJRQw1VU9PtFhxMt9NFjl846w%3D%2F1280x0%2Fsmart%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fadvancelocal%2FYITTQEWCCNH6VBNPXC7E3FXLXY.jpg&f=1&nofb=1',
  //       // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
  //       // 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  //       // '+351 94 3453434',
  //       // 'street C',
  //       // 'quintaalfarroba@quintaalfarroba.com',
  //       // 'www.alfarroba.com',
  //       // {
  //       //   facebook: 'facebook link',
  //       //   instagram: 'nistagram link',
  //       //   twitter: 'twitter link'
  //       // },
  //       // ['image1', 'image2'],
  //       // '22 Mar 2021',
  //       // [4],
  //       // [52.8221,-1.6810])
  // ];

  // reviewsData:ReviewModel[] = [
  //   new ReviewModel(0, 0, 2, 'review 01', '1 Jan 2021'),
  //   new ReviewModel(0, 1, 4, 'review 02', '2 Apr 2017'),
  //   new ReviewModel(0, 2, 5, 'review 03', '15 Jan 2019'),
  //   new ReviewModel(1, 3, 3, 'review 04', '21 Oct 2020'),
  //   new ReviewModel(1, 4, 1, 'review 05', '7 Sep 2021')
  // ];

  // constructor(private router:Router) {
    
  // }

  /**
  setSites(sitesData:SiteModel[]):void {
    this.sitesData = sitesData;
    this.sitesChangedEvent.emit(this.sitesData);
  }

  getSites():SiteModel[] {
      return this.sitesData.reverse();
  }

  getSite(siteID:number):SiteModel|undefined {
    return this.sitesData.find(s=>s.id===siteID);
  }

  getSiteDetail(siteID:any):any {
    const siteData = this.getSite(parseInt(siteID));
    return {
      site: siteData,
      reviews: this.getReviews(siteData?.reviews)
    };
  }

  deleteSite(index:number):void {
    this.sitesData.splice(index,1);
  }

  addSite(site:SiteModel) :void {
      if(!site.img) {
        site.img = site.media[0];
      }
      site.id = this.sitesData.length;
      this.sitesData.push(site);
      this.router.navigate(['/site-list']);
  }
  editSite(site:SiteModel):void {
      this.sitesData[site.id] = site;
      this.router.navigate(['/site-list']);
  }

  addReview(r:any):void {
    const id = this.reviewsData.length;
    const rm:ReviewModel = new ReviewModel(0, id, r.rating, r.review, 'dd')
    this.sitesData[r.siteID].reviews.push(rm.id);
    this.reviewsData.push(rm)
  }

  searchSite(siteName:string):SiteModel[] {
    return this.sitesData.filter(s => s.title === siteName);
  }

  updateSite(index:number, site:SiteModel) :void {
      this.sitesData[index] = site;
  }

  getReviews(indexes:number[]|undefined):ReviewModel[] {
    if(!indexes) return [];
    let out:ReviewModel[] = [];
    indexes.forEach(i => {
      const rID:ReviewModel | undefined = this.reviewsData.find(r => r.id === i);
      if(rID) out.push(rID);
    });
    return out;
  }
  getReview(reviewID:number):ReviewModel | undefined {
    return this.reviewsData.find(r => r.id === reviewID);
  }

  getFilterMapData(filterData:any[]):any[] {

    let out:any[] = [];
    filterData.forEach(s => {
      out.push({
        siteID: s.id,
        type: s.type,
        coordinates: s.coords
      })
    });
    return out;
  }

  getMapData() :any[] {
    let out:any[] = [];
    this.sitesData.forEach(s => {
      out.push({
        siteID: s.id,
        type: s.type,
        coordinates: s.coords
      })
    });
    return out;
  }
   */
}