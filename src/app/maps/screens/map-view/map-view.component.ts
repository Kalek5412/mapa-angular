import { Component, OnInit } from '@angular/core';
import { icon, Map, marker, tileLayer } from 'leaflet';
import { PlacesService } from '../../../services/places.service';
//npm i leaflet@1.7.1
//npm i --save-dev @types/leaflet@1.4.5

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements OnInit {
  geo: any;
  map: any;

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.geo = this.placesService.useLocation;
  }

  ngAfterViewInit() {
    this.map = new Map('map').setView(this.geo, 13);
/*     tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map); */
    
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  }

  ubicar(){
    const nvoIcon=icon({
      iconUrl:'../assets/icono/marker-icon2.png',
      iconSize:[25,41]
    })
    marker(this.geo,{icon:nvoIcon}).addTo(this.map).bindPopup("<strong>mi ubi</strong>").openPopup();
  }

  load(){
    location.reload();
  }
}
