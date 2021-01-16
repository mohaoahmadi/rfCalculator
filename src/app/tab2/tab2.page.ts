import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  shouldHide: boolean = true;
  kilometer: string;
  mile: string;
  milliwatt: string;
  dBm: string;

  constructor() {}

  ngOnInit(){}

  hide(){
    if (!this.shouldHide){
      this.shouldHide = !this.shouldHide;
    }
    else
    {
      this.shouldHide = !this.shouldHide;
    }
    
    console.log("card is hidden");
  }

  kmtomi(kmValue){

      this.mile = (kmValue * 0.621371).toFixed(2);

      console.log(this.mile);
  }
  mitokm(miValue){
    this.kilometer = (miValue * 1.60934).toFixed(2);
  }

  mwtodb(mwValue){

    this.dBm = (Math.log10(mwValue) * 10).toFixed(2);

    console.log(this.dBm);
}
dbtomw(dbValue){
  this.milliwatt = Math.pow(10, dbValue/10).toFixed(2);
}

}
