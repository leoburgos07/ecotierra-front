import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMarkerComponent } from './components/marker/add-marker/add-marker.component';
import { ListMarkersComponent } from './components/marker/list-markers/list-markers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

const rutas: Routes = [
  { path : 'map', component: MapComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : 'list-markers', component: ListMarkersComponent},
  { path : 'create-marker', component : AddMarkerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DashboardComponent,
    AddMarkerComponent,
    ListMarkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
