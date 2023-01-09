import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/marker.service';
import { Marker } from 'src/app/models/marker';

@Component({
  selector: 'app-add-marker',
  templateUrl: './add-marker.component.html',
  styleUrls: ['./add-marker.component.css']
})
export class AddMarkerComponent implements OnInit {

  constructor(public markerService: MarkerService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(markerForm: NgForm) {
    if (markerForm.value.id == null) {
      this.markerService.storeMarkers(markerForm.value).subscribe((response:any) => {
        if(response.success === false){
          alert(response.message);
        }else{
          this.router.navigate(['/map']).then(()=>{
            window.location.reload();
          });
        }
      })
    } else {
      this.markerService.updateMarker(markerForm.value.id,markerForm.value).subscribe((response:any)=>{
        if(response.success === false){
          alert(response.message);
        }
          this.router.navigate(['/list-markers']).then(()=>{
            window.location.reload();
          });
        
      })
    }
    this.resetForm(markerForm);
  }

  resetForm(markerForm:NgForm){
    if(markerForm != null){
      markerForm.reset();
      this.markerService.selectMarker = new Marker();
    }
  }

}
