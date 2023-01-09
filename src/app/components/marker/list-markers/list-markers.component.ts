import { MarkerService } from './../../../marker.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Marker } from 'src/app/models/marker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-markers',
  templateUrl: './list-markers.component.html',
  styleUrls: ['./list-markers.component.css']
})
export class ListMarkersComponent implements OnInit {

  markers:any=[];

  constructor(public markerService:MarkerService, private router:Router) { }

  ngOnInit(): void {
    this.loadMarkers();
  }

  loadMarkers(){
    return this.markerService.getMarkers().subscribe((data:{})=>{
      this.markers = data;
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.markers, event.previousIndex, event.currentIndex);
  }

  deleteMarker(id:number){
    this.markerService.deleteMarker(id).subscribe((response)=>{
      this.loadMarkers();
    })
  }

  editMarker(marker:Marker){
    this.markerService.selectMarker = Object.assign({},marker);
    this.router.navigate(['/create-marker']);
  }

}
