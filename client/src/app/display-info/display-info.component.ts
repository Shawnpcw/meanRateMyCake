import { Component, OnInit, Input } from '@angular/core';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {
  @Input() selectedCake: any;
  avgRating:number;
  constructor(private _cakeService: CakeService) { }

  ngOnInit() {
    // console.log(this.selectedCake)
    this.avgRate()
    // console.log(sum)
    
  }
  avgRate(){
    let sum = 0

    for( let rating of this.selectedCake.rating){
      sum += rating.rating;
      console.log( rating)
    }
    this.avgRating= sum /this.selectedCake.rating.length;
  }
  

}
