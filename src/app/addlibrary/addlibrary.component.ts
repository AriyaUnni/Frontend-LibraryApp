import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrls: ['./addlibrary.component.css']
})
export class AddlibraryComponent implements OnInit {

  constructor() { }

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

    this.status=true
  }


  ngOnInit(): void {
  }

}
