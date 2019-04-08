import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'client';
  cakes:any;
  newCake:any={
    baker_name:"",
    img_url:""
  };
  cakeRating:any = {
    rating:5,
    comment:""
  }
  cakeToShow:any;
  info:any;
  selectedCake:any;
  constructor(private _cakeService: CakeService){}
  ngOnInit(){
    this.getCakes();
  }
  getCakes(){
    this._cakeService.getCakes().subscribe(data=>{

    console.log(data)
    this.cakes =data;
    console.log(this.cakes)
    })
  }
  createCake(){
    this._cakeService.createCake(this.newCake).subscribe()
    this.newCake={
                    baker_name:"",
                    img_url:""
                  };
    this.getCakes()
  }
  createCakeComment(id){
    this._cakeService.createComment(this.cakeRating,id).subscribe()
    this.cakeRating={
                    rating:5,
                    comment:""
                  };
    
  }
  getACake(id){
    
    this._cakeService.getACake(id).subscribe(data=> {
      // console.log(data,"this is data 88888888888888888888888888888888888888888888888888888888888888888888888")
      this.cakeToShow = data 
    })
    
  }
  GetCakeToShow(id){
    
    // console.log(this.selectedCake)
    this.getACake(id)
    // console.log(this.cakeToShow,"cake to show ********************")
  }

}
