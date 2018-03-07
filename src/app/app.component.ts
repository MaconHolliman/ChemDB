import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
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

  shouldRun: true;


 constructor() {
    
} 

ngOnInit() {
 
    $('.checkbox .btn').on('click', function() {
    var hiddenField = $(this).closest('.form-group').find('input[type=text]'), val = hiddenField.val();
    hiddenField.val(val === "1" ? "0" : "1");
    $(this).toggleClass('btn-success btn-default');
    $(this).find('span.fa').toggleClass('fa-check-square-o fa-square-o');
  });

 
  
  
    
}
    
  
   
}

