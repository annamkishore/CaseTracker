import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CaseHomeComponent} from './case-home/case-home.component';
import {CaseDetailsComponent} from './case-details/case-details.component';
import {PartiesComponent} from './parties/parties.component';
import {CaseTabsComponent} from './case-tabs/case-tabs.component';
import {Tabs} from './ui/tabs';
import {Tab} from './ui/tab';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CaseHomeComponent,
    CaseDetailsComponent,
    PartiesComponent,
    CaseTabsComponent,
    Tabs,
    Tab
  ],
  exports: [
    CaseHomeComponent,
    CaseDetailsComponent,
    PartiesComponent,
    CaseTabsComponent
  ]
})
export class CtModule { }
