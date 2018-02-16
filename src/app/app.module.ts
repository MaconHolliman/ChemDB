import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgSemanticModule } from "ng-semantic";
import { NgModel } from '@angular/forms';


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {DataTableModule,SharedModule,DialogModule,InputTextModule,InputTextareaModule,ButtonModule,DataGridModule,OverlayPanelModule} from 'primeng/primeng';



import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DatabaseComponent } from './database/database.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSidenavModule,
    NoopAnimationsModule,
    NgSemanticModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    DataTableModule,
    SharedModule,
    MatTabsModule,
    DialogModule,
    InputTextareaModule,
    ButtonModule,
    DataGridModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
