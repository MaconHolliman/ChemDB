import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
/// <reference path ="../typings/jquery/jquery.d.ts"/>
import * as Jquery from 'jquery';

import {DatabaseComponent} from './database/database.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chems n\' Stuff';

  searchTerm: string=  "";
  chemicalName: string=  "";
  CID: string=  "";
  molecularFormula: string=  "";
  molecularWeight: string=  "";
  CASN: string=  "";
  IUPACName: string=  "";
  synonyms: string=  "";
  SMILES: string=  "";

  combinedAssayTarget: any;

  res: any;

  assay: any;
  citation: any;
  target: any;

  citationID: any;
  targetID: any;

  shouldRun: true;


  
  
 


 constructor(private http: HttpClient) {
    
} 

ngOnInit() {
 
    //this.getAssay();
    //this.getCitation();
    //this.getTarget();
    //this.getTargetID();
    //this.getCitationID();

    $('.checkbox .btn').on('click', function() {
    var hiddenField = $(this).closest('.form-group').find('input[type=text]'), val = hiddenField.val();
    hiddenField.val(val === "1" ? "0" : "1");
    $(this).toggleClass('btn-success btn-default');
    $(this).find('span.fa').toggleClass('fa-check-square-o fa-square-o');
  });

  $(document).ready(function(){
	
    $('ul.switcher li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('li').removeClass('active');
      $('div.tab-pane').removeClass('active');
  
      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
    })
  
  })

 
 
    
}
     getAssay(): void {
    this.http.get('http://localhost:3000/api/assay').subscribe(data => {
    this.assay = data;
    console.log("Assay_Output");
    console.log(this.assay);
    });
  }

  getTarget(): void {
    this.http.get('http://localhost:3000/api/target').subscribe(data => {
    this.target = data;
    console.log("Target_Output");
    console.log(this.target);
    });
  }

  getCitation(): void {
    this.http.get('http://localhost:3000/api/citation').subscribe(data => {
    this.citation = data;
    console.log("Citation_Output");
    console.log(this.citation);
    });
  }

  getCitationID(): void {
    this.http.get('http://localhost:3000/api/target_id').subscribe(data => {
    this.targetID = data;
    console.log("Citation ID_Output");
    console.log(this.targetID);
    });
  }

  getTargetID(): void {
    this.http.get('http://localhost:3000/api/citation_id').subscribe(data => {
    this.citationID = data;
    console.log("Target ID_Output");
    console.log(this.citationID);
    });
  }

  combineAssay(){
    //this.res = this.assay.map(x => Object.assign(x, this.target.find(y => y.id == x.id)));

    //console.log(this.assay[1]);
    //console.log(this.target[1]);
    //this.assay[2] = this.assay[1] + this.target[1];
    //Object.keys(this.assay[1]).forEach(function(key) { this.target[1][key] = this.assay[1][key]; });
    
    //console.log(Object.assign({}, this.assay[1],this.target[1]));
    for (let i=0; i<this.targetID.length; i++) {
      console.log(Object.assign({}, this.assay[this.targetID[i].aeid - 1],this.target[this.targetID[i].target_id - 1]));
    
    
    }
    console.log(this.combinedAssayTarget);

  }
  
  
   
}

