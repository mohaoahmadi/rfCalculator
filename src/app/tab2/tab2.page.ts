import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  shouldHide: boolean = true;
  kilometer: number;
  mile: number;

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

  calculate(){
      this.mile = this.kilometer * 0.621371;
      console.log(this.mile);

  }

}
