import { Directive,ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {
  private distCardHide: boolean;
  private txCardHide: boolean;
  private kilometer: string;
  private mile: string;
  private milliwatt: string;
  private dBm: string;



  constructor() {}

  ngOnInit(){}

  hide(cardId:string){
    if(cardId === 'txCard'){
      this.txCardHide = !this.txCardHide;
    }
    if(cardId === 'distCard'){
      this.distCardHide = !this.distCardHide;
    }

  }

  kmtomi(kmValue: number){

      this.mile = (kmValue * 0.621371).toFixed(2);

      console.log(this.mile);
  }
  mitokm(miValue: number){
    this.kilometer = (miValue * 1.60934).toFixed(2);
  }

  mwtodb(mwValue: number){

    this.dBm = (Math.log10(mwValue) * 10).toFixed(2);

    console.log(this.dBm);
}
dbtomw(dbValue: number){
  this.milliwatt = Math.pow(10, dbValue/10).toFixed(2);
}

}
