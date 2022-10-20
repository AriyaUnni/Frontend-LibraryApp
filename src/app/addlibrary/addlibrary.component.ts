import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bookname=""
  bookgenre=""
  authorname=""
  publication=""
  price=""

  status:boolean=false

  readValues=()=>{
    let data={
      "bookname":this.bookname,
      "bookgenre":this.bookgenre,
      "authorname":this.authorname,
      "publication":this.publication,
      "price":this.price
    }

    console.log(data)

    this.myapi.addLibrary(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
        
      }
    )

    this.bookname=""
    this.bookgenre=""
    this.authorname=""
    this.publication=""
    this.price=""

    this.status=true
  }


  ngOnInit(): void {
  }

}
