import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  templateUrl: './parent-date.component.html',
  styleUrls: ['./parent-date.component.scss']
})
export class ParentDateComponent implements OnInit {

  cities: any[]=
  [
    {
     city:'Miami',
     hour: new Date().toLocaleString("en-US", {timeZone: "America/New_York"})


     
    }, 
    {
      city:'Paris',
      hour : new Date().toLocaleString("en-fr", {timeZone: "Europe/Paris"})

    }
  ]
  
  constructor() { }


  ngOnInit(): void {
  }

}
