import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements AfterViewInit {

  private map:any;
  @Input() mapData:any[] = [];
  @Input() mapID:string = 'none';
  @Input() isPlacement:boolean = false;
  @Output() onChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  private centroid:L.LatLngExpression = [47.250, 7.646];
  isZoomed:boolean = false;
  isMarked:boolean = false;
  markerStatus:string = 'zoom';

  private markersLayer:any;

  constructor(private router:Router) {
   }

  ngAfterViewInit(): void {


    this.mapID = this.isPlacement ? 'mapadd' : 'maplist';

    this.map = L.map(this.mapID, {center: this.centroid, zoom:3});
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/brunoperry/cjqr2e6z699gu2tpavd0e5wwy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJ1bm9wZXJyeSIsImEiOiJjamdhdHdramkxbDA4MnpzMDdpaXdkZTdoIn0.bvfmigvdRdrNBnAxfX_e2g', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.markersLayer  = L.layerGroup().addTo(this.map);

    switch (this.mapID) {
      case 'mapadd':
        this.initMapAdd();
        break;
      case 'maplist':
      default:
        this.initMapList();
        break;
    }
  }

  private initMapAdd():void {

    this.map.on('zoom', () => {
      this.isZoomed = this.map.getZoom() >= 17;
      this.isZoomed ? this.markerStatus = 'tap!' : this.markerStatus = 'zoom'
    });
  }
  private initMapList(): void {

    const markerIcon = L.icon({
      iconUrl: '/assets/images/marker_map_icon.svg',
      iconSize:     [18, 25],
      iconAnchor:   [9, 25],
      popupAnchor:  [-3, -76]
    });
    this.mapData.forEach(d => {
      const markerOptions = {
        clickable: true,
        icon: markerIcon
      }
      const marker = L.marker([d.coordinates[0], d.coordinates[1]], markerOptions).addTo(this.map);
        marker.addEventListener('click', () => {
        this.router.navigate(['/site-detail/', d.siteID])
      })
    });
  }

  onMarkerTapClick():void {

    const coords = this.map.getBounds().getCenter();
    this.onChange.emit([coords.lat, coords.lng]);

    const markerIcon = L.icon({
      iconUrl: '/assets/images/marker_map_icon.svg',
      iconSize:     [32, 45],
      iconAnchor:   [16, 45]
    });
    const markerOptions = {
        clickable: true,
        icon: markerIcon
      }
    L.marker(coords, markerOptions).addTo(this.markersLayer);
    this.isMarked = true;
  }
  onClearMarkerClick():void {
    this.onChange.emit();
    this.markersLayer.clearLayers();
    this.isMarked = false;
  }
  onMyLocationClick():void {
    this.map.locate({setView: true, watch: true, maxZoom: 17});
  }
}
