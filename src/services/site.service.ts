import { EventEmitter, Injectable } from '@angular/core';
import { ReviewModel } from 'src/models/review.model.';
import { SiteModel } from 'src/models/site.model';
import { BackendService } from './backend.service';

@Injectable({ providedIn: 'root' })
export class SiteService {
  sitesData: SiteModel[] = [];
  sitesChangedEvent: EventEmitter<SiteModel[]> = new EventEmitter();

  reviewsData: ReviewModel[] = [];

  constructor(private backendService: BackendService) {
    this.init();

    // this.backendService.getDataFrom('sites').subscribe((res:SiteModel[]) => {
    //   this.sitesData = res;
    //   this.sitesChangedEvent.emit(this.sitesData);
    // });
  }

  async init() {
    this.sitesData = await this.backendService.getDataFrom('sites');
    this.sitesChangedEvent.emit(this.sitesData);
  }

  getSites(): SiteModel[] {
    if (this.sitesData.length === 0) {
    }
    console.log('here', this.sitesData);

    return this.sitesData;
  }
  getSitesFiltered(filters: string[]): SiteModel[] {
    return this.sitesData.filter((s) => s.type === filters[0]);
  }

  getSiteById(id: string): SiteModel | any {
    return this.sitesData.find((site) => site.id === id);
  }
  getSitesByID(ids: string[]): SiteModel[] {
    const out: SiteModel[] = [];
    ids.forEach((id) => {
      let site = this.sitesData.find((s) => s.id === id);
      if (site) out.push(site);
    });
    return out;
  }

  async getSearchedSite(searchValue: string): Promise<any> {
    return null;
  }

  async getReviewById(id: string) {
    const out = await this.backendService.getDataById('reviews', id);
    return await out.data();
  }

  async addSite(site: SiteModel) {
    await this.backendService.saveData('sites', site);
  }
  async updateSite(site: SiteModel) {
    return await this.backendService.updateData('sites', site);
  }
  async deleteSiteByID(id: string) {
    return await this.backendService.deleteDataByID('sites', id);
  }

  /**
   * TESTING ONLY
   */
  get dummyData(): any[] {
    return [
      {
        id: 'wfwef4iweur',
        type: 'farm',
        title: 'quinta das azenhagazinhas',
        rating: 2,
        reviews: [{}, {}],
        media: ['http://e2value.com/wp-content/uploads/2014/01/farm11.jpg'],
        description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
      },
      {
        id: '893748736hajkdh',
        type: 'other',
        title: 'oitavos',
        rating: 4,
        reviews: [],
        media: [
          'https://www.glencorgolf.com/wp-content/uploads/2014/12/oitavos-dunes-2-.jpg',
        ],
        description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
      },
    ];
  }

  getSearchResults(val: string): any {
    return this.dummyData.filter((s: any) => s.title.includes(val)) || [];
  }
}
