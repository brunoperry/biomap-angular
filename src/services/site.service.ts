import { EventEmitter, Injectable } from "@angular/core"
import { ReviewModel } from "src/models/review.model.";
import { SiteModel } from "src/models/site.model";
import { BackendService } from "./backend.service";


@Injectable({providedIn:'root'})
export class SiteService {

  sitesData:SiteModel[] = [];
  sitesChangedEvent: EventEmitter<SiteModel[]> = new EventEmitter();

  reviewsData:ReviewModel[] = [
    new ReviewModel(0, 0, 2, 'review 01', '1 Jan 2021'),
    new ReviewModel(0, 1, 4, 'review 02', '2 Apr 2017'),
    new ReviewModel(0, 2, 5, 'review 03', '15 Jan 2019'),
    new ReviewModel(1, 3, 3, 'review 04', '21 Oct 2020'),
    new ReviewModel(1, 4, 1, 'review 05', '7 Sep 2021')
  ];

  constructor(private backendService:BackendService) {
    this.backendService.getDataFrom('sites').subscribe((res:SiteModel[]) => {
      this.sitesData = res;
      this.sitesChangedEvent.emit(this.sitesData);
    });
  }

  getSites(): SiteModel[] {
    return this.sitesData;
  }
  getSitesFiltered(filters:string[]):SiteModel[] {
    return this.sitesData.filter(s=>s.type===filters[0]);;
  }
 
  getSiteById(id:string):SiteModel | any {
    return this.sitesData.find(site => site.id === id);
  }
  getSitesByID(ids:string[]): SiteModel[] {
    const out:SiteModel[] = [];

    ids.forEach(id => {
      let site = this.sitesData.find( s => s.id === id );
      
      if(site) out.push(site);
    });
    return out;
  }
 
  async addSite(site: SiteModel) {
    if(site.media.length > 0) {
      const uploadURL = await this.backendService.uploadImages(site.media);
      site.img = uploadURL;
      site.media = [uploadURL];
    }
    await this.backendService.saveData('sites', site);
  }
 
  async updateSite(site: SiteModel) {
    return await this.backendService.updateData('sites', site);
  }

  async deleteSiteByID(id:string) {
    return await this.backendService.deleteDataByID('sites', id);
  }
}