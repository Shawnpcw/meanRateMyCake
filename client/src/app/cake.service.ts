import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) { }
  createCake(data){
    console.log('Sent request to create Cake',data)
    return this._http.post("/cakes",data)
  }
  getCakes(){
    console.log('Sent request to get all Cakes')
    return this._http.get("/cakes")

  }
  getACake(id){
    console.log('Sent request to get 1 Cake')
    return this._http.get("/cakes/"+id)
  }
  createComment(data,id){
    console.log('Sent request to create Comment'+id,data)
    return this._http.post("/cakes/"+id,data)
  }


}
