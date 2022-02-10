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

    return this.sitesData;
  }
  getSitesFiltered(filters: string[]): SiteModel[] {
    return this.sitesData.filter((s) => s.type === filters[0]);
  }

  getSiteById(id: string): SiteModel | any {
    return this.dummyData.find((site) => site.id === id);
    // return this.sitesData.find((site) => site.id === id);
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
        media: ['http://e2value.com/wp-content/uploads/2014/01/farm11.jpg'],
        description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
        location: {
          img: 'https://firebasestorage.googleapis.com/v0/b/biomap-2f3d1.appspot.com/o/files%2FScreenshot%202022-02-09%20at%2017.15.41.png?alt=media&token=148b5abd-49f4-41c4-bb88-513a808e152f',
          lat: 0,
          lng: 0,
        },
        contacts: {
          address: 'wlefijwliejr welkjr',
          email: '',
          website: '',
          phone: '',
          facebook: '',
          instagram: '',
          twitter: '',
        },
        reviews: ['00', ''],
        date: 1644968329062,
      },
      {
        id: 'wfwefqweqwe4iweur',
        type: 'market',
        title: 'quinta do sol',
        rating: 2,
        media: [
          'https://www.agri-pulse.com/ext/resources/images/Agriculture-photos/Farmscapes/Farm2.jpg?height=635&t=1492461559&width=1200',
        ],
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc',
        location: {
          img: 'https://firebasestorage.googleapis.com/v0/b/biomap-2f3d1.appspot.com/o/files%2FScreenshot%202022-02-09%20at%2017.15.41.png?alt=media&token=148b5abd-49f4-41c4-bb88-513a808e152f',
          lat: 0,
          lng: 0,
        },
        contacts: {
          address: 'lqwkjelkjwer',
          email: 'kwjer@qwkr.pt',
          website: 'www.sdlfkj.com',
          phone: '12334433',
          facebook: 'qwe',
          instagram: 'qweqweqwe',
          twitter: 'qweqweqwe',
        },
        reviews: ['00', ''],
        date: 1644378169062,
      },
      {
        id: '893748736hajkdh',
        type: 'other',
        title: 'oitavos',
        rating: 4,
        media: [
          'https://www.glencorgolf.com/wp-content/uploads/2014/12/oitavos-dunes-2-.jpg',
        ],
        description: 'qwjdkqjwhkqjhwe qkwjhekqjwhe qwjkhekqjwhe',
        location: {
          img: 'https://firebasestorage.googleapis.com/v0/b/biomap-2f3d1.appspot.com/o/files%2FScreenshot%202022-02-09%20at%2017.15.41.png?alt=media&token=148b5abd-49f4-41c4-bb88-513a808e152f',
          lat: 0,
          lng: 0,
        },
        contacts: {
          address: 'lqwkjelkjwer',
          email: 'kwjer@qwkr.pt',
          website: 'www.sdlfkj.com',
          phone: '12334433',
          facebook: 'qwe',
          instagram: 'qweqweqwe',
          twitter: 'qweqweqwe',
        },
        reviews: ['00', ''],
        date: 1644308329062,
      },
    ];
  }

  get dummyReviews(): any {
    return [
      {
        id: 'wijrekwjer',
        userID: 'b',
        siteID: 'wfwef4iweur',
        rating: 3,
        text: 'alkdjkajshdkjashdkjashdkjahskdjh',
        date: 1644508169062,
      },
      {
        id: 'wijrekqweqwewjer',
        userID: 'b',
        siteID: 'wfwef4iweur',
        rating: 2,
        text: 'alkdjkaasdasdasdasdasdasdjshdkjashdkjashdkjahskdjh',
        date: 1644308169062,
      },
      {
        id: 'weqwaewjer',
        userID: 'a',
        siteID: 'wfwefqweqwe4iweur',
        rating: 3,
        text: 'o239784i82374i23jhg2jh3g4kjh234',
        date: 1644508166062,
      },
      {
        id: 'weqwaewjeeeer',
        userID: 'a',
        siteID: 'wfwefqweqwe4iweur',
        rating: 4,
        text: 'alkdjkajshdkjashdkjashdkjahskdjh',
        date: 1634508169062,
      },
    ];
  }

  get dummyUsers(): any[] {
    return [
      {
        id: 'a',
        name: 'perry',
        avatar: '',
      },
      {
        id: 'b',
        name: 'angels sex',
        avatar: '',
      },
    ];
  }

  getUserByID(uID: string): any {
    return this.dummyUsers.find((u: any) => u.id === uID);
  }
  getReviewByID(rID: string): any {
    return this.dummyReviews.find((r: any) => r.id === rID);
  }
  //
  getSiteReviews(siteID: string): any {
    let out: any[] = [];
    this.dummyReviews.forEach((rev: any) => {
      const user = this.getUserByID(rev.userID);

      if (rev.siteID === siteID)
        out.push({
          avatar: user.avatar,
          username: user.name,
          rating: rev.rating,
          text: rev.text,
          date: rev.date,
        });
    });

    return out;
  }

  getSearchResults(val: string): any {
    return this.dummyData.filter((s: any) => s.title.includes(val)) || [];
  }
}
