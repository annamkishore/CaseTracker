import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-case-tabs',
  templateUrl: './case-tabs.component.html',
  styleUrls: ['./case-tabs.component.css']
})
export class CaseTabsComponent implements OnInit {

  currTab: any;

  constructor() { }

  ngOnInit() {
  }

  test1(tabs1: any) {
    this.currTab = tabs1.find(tab => tab.active);
  }
}
