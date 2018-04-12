import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
/// <reference path ="../typings/jquery/jquery.d.ts"/>
import * as Jquery from 'jquery';

import {SelectItem} from 'primeng/api';

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

  searchShow = true;
  targetSearchShow = true;

  res: any;

  assay: any;
  citation: any;
  target: any;

  citationID: any;
  chemical: any;
  targetID: any;

  chemicalSearch: any;
  targetSearch: any;

  shouldRun: true;

  
  favoriteSeason: string;

  chemicalFilters = [
    'Substance Name',
    'Substance CASRN',
    'SMILES',
  ];

  targetFilters = [
    'Target ID',
    'Target Name',
  ];

  targetFilterChosen: string = "";
  
  targetIdSearch: boolean;

  chemicalFilterChosen: string = "";
  substanceNameSearch: boolean;
  CASRNSearch: boolean;
  SMILESSearch: boolean;

  updateFilterChemical(){
    if(this.favoriteSeason == "SMILES")
    {
      this.SMILESSearch = true;
      this.CASRNSearch = false;
      this.substanceNameSearch = false;
    }
    if(this.favoriteSeason == "Substance CASRN")
    {
      this.SMILESSearch = false;
      this.CASRNSearch = true;
      this.substanceNameSearch = false;
    }
    if(this.favoriteSeason == "Substance Name")
    {
      this.SMILESSearch = false;
      this.CASRNSearch = false;
      this.substanceNameSearch = true;
    }
  }


  updateFilterTarget(){
    if(this.favoriteSeason == "Target ID")
    {
      this.targetSearch = false;
      this.targetIdSearch = true;
    }
    if(this.favoriteSeason == "Target Name")
    {
      this.targetSearch = true;
      this.targetIdSearch = false;
    }
  
  }


  //Search Table Variables
  sortKey: string;

  sortField: string;

  sortOrder: number;

  sortOptions: any;
  //sortOptions: selectItem[];
  
  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  //End search table variables


  FilterBySubstance(){
    document.getElementById("searchChange").setAttribute("filterBy", "Substance_CASRN");
  }
  
 


 constructor(private http: HttpClient) {
    
} 

ngOnInit() {
 
  this.sortOptions = [
    {label: 'Newest First', value: '!year'},
    {label: 'Oldest First', value: 'year'},
    {label: 'Brand', value: 'brand'}
];
    //this.getAssay();
    //this.getCitation();
    //this.getTarget();
    //this.getTargetID();
    //this.getChemical();
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

    this.targetIdSearch = false;
    this.targetSearch = false;
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


  getChemical(): void {
    this.http.get('http://localhost:3000/api/chemical').subscribe(data => {
    this.chemical = data;
    console.log("Chemical _Output");
    console.log(this.chemical);
    });
    this.SMILESSearch = false;
    this.CASRNSearch = false;
    this.substanceNameSearch = false;
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

