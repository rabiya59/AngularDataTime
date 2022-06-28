import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant-date',
  templateUrl: './enfant-date.component.html',
  styleUrls: ['./enfant-date.component.scss']
})
export class EnfantDateComponent implements OnInit {


  @Input()
  city!: string;

  @Input()
  hour!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
