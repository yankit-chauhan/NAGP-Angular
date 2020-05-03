import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  pageTitle: string = "Precautions";
  constructor() { }

  ngOnInit(): void {
  }

}
