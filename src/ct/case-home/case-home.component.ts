import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-case-home',
  templateUrl: './case-home.component.html',
  styleUrls: ['./case-home.component.css']
})
export class CaseHomeComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleNavButton() {
    this.isCollapsed = !this.isCollapsed;
  }
}
