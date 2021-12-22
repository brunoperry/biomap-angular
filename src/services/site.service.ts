import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Router } from "@angular/router";
import { catchError, Observable } from "rxjs";
import { ReviewModel } from "src/models/review.model.";
import { SiteModel } from "src/models/site.model"


@Injectable({providedIn:'root'})
export class SiteService {

  DB_PATH = 'https://biomap-2f3d1-default-rtdb.firebaseio.com';

  sitesData:SiteModel[] = [

        new SiteModel(
          0,
        'Quinta da marinha',
        'Farm',
        2,
        'https://www.gardeningknowhow.com/wp-content/uploads/2016/03/surplus-veggies.jpg',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        '+351 94 3453434',
        'street A',
        'info@quintadmarinha.com',
        'www.quintadosol.com',
        ['facebook', 'instagram'],
        ['image1', 'image2'],
        '02 Jan 2019',
        [0,2],
        [37.82474,-8.65186]),
        new SiteModel(
          1,
        'Quinta do Sol',
        'Camping',
        5,
        'https://cdn.vox-cdn.com/thumbor/wNCd1cBf7MrId4a_2IT-XmcfygY=/0x0:5114x3414/1200x800/filters:focal(2148x1298:2966x2116)/cdn.vox-cdn.com/uploads/chorus_image/image/64713096/shutterstock_1106746100.0.jpg',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        '+351 94 3212124',
        'street B',
        'quintadosol@quintadosol.com',
        'www.quintadosol.com',
        ['facebook', 'instagram'],
        ['image1', 'image2'],
        '12 Jan 2021',
        [1,3],
        [39.64369,-4.41705]),
        new SiteModel(
          2,
        'Quinta da Alfarroba',
        'Park',
        5,
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.masslive.com%2Fresizer%2FYroJRQw1VU9PtFhxMt9NFjl846w%3D%2F1280x0%2Fsmart%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fadvancelocal%2FYITTQEWCCNH6VBNPXC7E3FXLXY.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sfmission.com%2Fgallery_files%2Fsite_pics%2FAsia%2FNepal%2FKathmandu%2FMaps_and_Guides%2FKathmandu-google-maps.jpg&f=1&nofb=1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        '+351 94 3453434',
        'street C',
        'quintaalfarroba@quintaalfarroba.com',
        'www.alfarroba.com',
        ['facebook', 'instagram'],
        ['image1', 'image2'],
        '22 Mar 2021',
        [4],
        [52.8221,-1.6810])
  ];

  reviewsData:ReviewModel[] = [
    new ReviewModel(0, 0, 2, 'review 01', '1 Jan 2021'),
    new ReviewModel(0, 1, 4, 'review 02', '2 Apr 2017'),
    new ReviewModel(0, 2, 5, 'review 03', '15 Jan 2019'),
    new ReviewModel(1, 3, 3, 'review 04', '21 Oct 2020'),
    new ReviewModel(1, 4, 1, 'review 05', '7 Sep 2021')
  ];

  constructor(private http:HttpClient, private router:Router) {

  }

  saveData():void {

    const path = `${this.DB_PATH}/sites.json`;

    this.http.put(path, this.sitesData).subscribe(h => console.log(h));

    console.log(path, 'done')
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
      this.sitesData.push(site);
      this.router.navigate(['/site-list']);
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
}