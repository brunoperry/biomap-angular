import { Component, AfterViewInit, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import {SimpleMapScreenshoter} from 'leaflet-simple-map-screenshoter';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements AfterViewInit, OnInit {

  private map:any;
  @Input() mapData:any[] = [];
  @Input() mapType:string = 'none';
  @Input() isPlacement:boolean = false;
  @Input() coords:number[] = [];
  @Output() onMapChange:EventEmitter<any> = new EventEmitter<any>();

  private centroid:L.LatLngExpression = [47.250, 7.646];
  isZoomed:boolean = false;
  isMarked:boolean = false;
  markerStatus:string = 'zoom';

  private markersLayer:any;
  private currentZoom:number = 3;

  constructor(private router:Router) {


  }

  ngOnInit():void {

    if(this.coords.length > 0) {
      this.centroid = [this.coords[0], this.coords[1]];
      this.currentZoom = 18;
      this.isZoomed = true;
      this.markerStatus = 'tap!'
    }
  }

  ngAfterViewInit(): void {

    let maxZoom:number = 18;
    let minZoom:number = 3;

    this.mapType = this.isPlacement ? 'mapadd' : 'maplist';

    this.map = L.map( this.mapType, {center: this.centroid, zoom:this.currentZoom});
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/brunoperry/cjqr2e6z699gu2tpavd0e5wwy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJ1bm9wZXJyeSIsImEiOiJjamdhdHdramkxbDA4MnpzMDdpaXdkZTdoIn0.bvfmigvdRdrNBnAxfX_e2g', {
      maxZoom: maxZoom,
      minZoom: minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.markersLayer  = L.layerGroup().addTo(this.map);
    new SimpleMapScreenshoter({ hidden: true }).addTo(this.map);
    
    switch ( this.mapType) {
      case 'mapadd':
        this.initMapAdd();
        break;
      case 'maplist':
      default:
        this.initMapList();
        break;
    }
    
    if(this.coords.length > 0) {
      this.centroid = [this.coords[0], this.coords[1]];
      this.currentZoom = 18;
      this.isZoomed = true;
      setTimeout(() => this.onMarkerTapClick(), 100);
    }
  }

  private initMapAdd():void {

    setTimeout(() => this.map.invalidateSize(), 100);
    this.map.on('zoom', () => {
      this.isZoomed = this.map.getZoom() >= 17;
      this.isZoomed ? this.markerStatus = 'tap!' : this.markerStatus = 'zoom'
    });
  }
  private initMapList(): void {

    setTimeout(() => this.map.invalidateSize(), 100);
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

  async onMarkerTapClick():Promise<any> {

    const coords = this.map.getBounds().getCenter();

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

    this.coords = [coords.lat, coords.lng];

    const mapImg = await this.takeSnapshot();
    this.onMapChange.emit({
      coords:[coords.lat, coords.lng],
      mapImg: mapImg
    });
  }
  onClearMarkerClick():void {
    this.onMapChange.emit({
      coords:[],
      mapImg: undefined
    });
    this.markersLayer.clearLayers();
    this.isMarked = false;
  }
  onMyLocationClick(e:any):void {
    e.preventDefault();
    this.map.locate({setView: true, watch: true, maxZoom: 17});
  }

  async takeSnapshot():Promise<any> {
    let pluginOptions = {
      cropImageByInnerWH: true,
      hidden: true,
      preventDownload: false,
      screenName: 'screen',
      hideElementsWithSelectors: ['.leaflet-control-container', 'leaflet-control-simpleMapScreenshoter'],
      mimeType: 'image/png',
    }

    try {
      const screenShoter = L.simpleMapScreenshoter(pluginOptions).addTo(this.map);
      const blob = await screenShoter.takeScreen('blob', { mimeType: 'image/jpeg' });
      return blob;
    } catch (error) {
      console.error(error)
    }
  }
}
