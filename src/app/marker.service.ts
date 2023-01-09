import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Marker } from "./models/marker";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class MarkerService {

    url = 'http://127.0.0.1:8000/api/markers/';
    reqHeader= new  HttpHeaders({
        'Content-Type':'aplication/json'
    });
    selectMarker:Marker = new Marker();

    constructor(private http:HttpClient) {}

    getMarkers():Observable<Marker>{
        return this.http.get<Marker>(this.url);
    }

    storeMarkers(marker:Marker):Observable<Marker>{
        return this.http.post(this.url+'create', marker,{headers:this.reqHeader});
    }

    deleteMarker(id:number){
        return this.http.delete(this.url+id+'/delete/');
    }

    updateMarker(id:number, marker:Marker){
        return this.http.put(this.url+id+'/edit', marker,{headers:this.reqHeader} );
    }

}