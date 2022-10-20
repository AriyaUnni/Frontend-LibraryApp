import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlibrary',
  templateUrl: './viewlibrary.component.html',
  styleUrls: ['./viewlibrary.component.css']
})
export class ViewlibraryComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewLibrary().subscribe(
      (data)=>{
        this.libraryData=data
      }
    )
  }

  deleteLibrary=(id:any)=>{
    let data={"id":id}

    this.myapi.deleteLibrary(data).subscribe(
      (response)=>{
        alert("DELETED")
      }
    )

    this.fetchData()

  }

  libraryData:any=[]

  ngOnInit(): void {
  }

}
