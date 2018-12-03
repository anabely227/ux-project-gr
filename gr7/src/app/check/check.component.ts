import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  h1Style: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    this.h1Style = true;
    console.log('clicked');
  }

}
