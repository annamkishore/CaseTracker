
/**
 * Created by kannam on 23-Apr-17.
 */

/**
 * Reference:
 * https://juristr.com/blog/2016/02/learning-ng2-creating-tab-component/
 * https://plnkr.co/edit/afhLA8wHw9LRnzwwTT3M?p=preview
 */

import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'tabs',
  template:`
    <div class="nav nav-pills">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a class="col-xs-3 btn-block">{{tab.title}}</a>
      </li>
    </div>
    <ng-content></ng-content>
  `
})
export class Tabs implements AfterContentInit {

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
