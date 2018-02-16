import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})


export class DatabaseComponent implements OnInit {

  
  
  displayDialog: boolean;
  results: string = '';
  body: string;
  data: any;
  source: Ng2SmartTableModule;
  id: number = 1;
  sortO: number = 1;
  sortF: string = '';
  loading: boolean;
  
  
   
  constructor(private http: HttpClient) {
    this.source = new Ng2SmartTableModule;
    
  }

  onSubmit(f: NgForm) {
   console.log(f.value);  // { first: '', last: '' }
   this.body = f.value;
   console.log(this.body);
    console.log(f.valid);  // false
  }
  
  visible: boolean = true;
  updateVisibility(): void {
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }

  
  cCols: any[];
  iCols: any[];
  eCols: any[];
  tCols: any[];
  taCols: any[];


 
  changeSort(event) {
    if (!event.order) {
      this.sortF = 'year';
    } else {
      this.sortF = event.field;
    }
}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
        
        this.loading = false;
    }, 1000);


this.iCols = [
  {field: 'cid', header: 'CID'},
  {field: 'sid', header: 'SID'},
  {field: 'casn', header: 'CASN'},
  {field: 'name', header: 'Name'},
  {field: 'general_name', header: 'Gen. Name'},
  {field: 'name_synonyms', header: 'Synonyms'},
  {field: 'IUPAC_name', header: 'IUPAC'},
  {field: 'formula', header: 'Formula'},
  {field: 'mw', header: 'Molecular Weight'},
  {field: 'SMILES', header: 'SMILES'},
  {field: 'pubchemfingerprint', header: 'PubChem Finger Print'}
];

this.cCols = [
  {field: 'citation_id', header: 'Citation ID'},
  {field: 'DOI', header: 'DOI'},
  {field: 'citation', header: 'Citation'},
  {field: 'title', header: 'Title'},
  {field: 'author', header: 'Author'},
  {field: 'url', header: 'URL'}
];

this.tCols = [
  {field: 'id', header: 'ID'}
];

this.taCols = [
  {field: 'target_id', header: 'Target ID'},
  {field: 'target_type', header: 'Target Type'},
  {field: 'full_name', header: 'Name'},
  {field: 'symbol', header: 'Symbol'},
  {field: 'gene_name', header: 'Gene Name'},
  {field: 'gene_symbol', header: 'Gene Symbol'},
  {field: 'target_desc', header: 'Target Description'}
];

this.eCols = [
  {field: 'assay_source', header: 'Assay Source'},
  {field: 'organism', header: 'Organism'},
  {field: 'tissue', header: 'Tissue'},
  {field: 'cell_line', header: 'Cell Line'},
  {field: 'aeid', header: 'AEID'},
  {field: 'citation', header: 'Citation'}
];



}

}
