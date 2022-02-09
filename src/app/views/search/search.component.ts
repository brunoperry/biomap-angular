import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/services/site.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private siteService: SiteService) {}

  public searchResults: any[] = [];

  ngOnInit(): void {
    // this.searchResults = this.siteService.getSearchResults('qui');
  }

  onSearchInputChange(input: any): void {
    const val: string = input.value;

    if (val.length > 2) {
      this.searchResults = this.siteService.getSearchResults(val);
    } else {
      this.searchResults = [];
    }
  }

  onMiniCardClick(id: string): void {
    console.log(id);
  }
}
