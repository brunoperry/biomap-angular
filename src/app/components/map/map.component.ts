import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let loader: Loader = new Loader({
      apiKey: 'AIzaSyD5okzzDEm-SydG7XMCaiQHfJRHlS9sKeI',
    });
    // loader.load().then(() => {
    //   new google.maps.Map(document.querySelector('#map') as HTMLElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // });
  }
}
