import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  definition: Array<any> = [
    { short: "Pt",
     desc: "Transmitted Power" },
     { short: "Gt",
     desc: "Transmitter antenna gain" },
     { short: "Gr",
     desc: "Receiver antenna gain" },
     { short: "Pr",
     desc: "Received power" },
     { short: "Өaz",
     desc: "Horizontal antenna beamwidth" },
     { short: "φel",
     desc: "Vertical antenna beamwidth" },
     { short: "Ls",
     desc: "Space loss resulting from attenuation and spreading" },
     { short: "MHz",
     desc: "Frequency used by system" },
     { short: "D",
     desc: "Distance of the transmittion" },
     { short: "Smin",
     desc: "Receiver sensitivity" },
  ];

  constructor() {}

  ngOnInit(){

  }

}
