import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewlibrary',
  templateUrl: './viewlibrary.component.html',
  styleUrls: ['./viewlibrary.component.css']
})
export class ViewlibraryComponent implements OnInit {

  constructor() { }

  libraryData:any=[]

  ngOnInit(): void {
  }

}
