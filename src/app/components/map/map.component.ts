import { MarkerService } from 'src/app/marker.service';
import { Component, OnInit } from '@angular/core';
import { marker, tileLayer, Map, circle, rectangle, polyline, polygon } from 'leaflet';
import { Marker } from 'src/app/models/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public markers: Array<Marker>;
  constructor(public markerService: MarkerService) {
    this.markers = [];
  }
  points: any = [];
  latlngs: any = [];

  ngOnInit(): void {
    this.paintMarkers();
  }

  paintMarkers() {
    this.markerService.getMarkers().subscribe((data: {}) => {
      this.points = data;
      const map = new Map('map').setView([0, 0], 12);
      tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      this.points.map((point: any) => {
        this.latlngs.push([point.latitude, point.longitude])
      })
      if (this.points.length > 2) {
        polygon(this.latlngs, { color: 'red' }).addTo(map);
        //rectangle(this.latlngs, { color: 'red' }).addTo(map);
      }
      this.points.map((item: any) => {
        marker([item.latitude, item.longitude]).addTo(map).bindPopup(item.name.toUpperCase());
      })

      map.fitBounds(this.latlngs);
    })
  }




}
