import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewLibrary=()=>{
    return this.http.get("http://localhost:8080/viewlibrary")
  }

  addLibrary=(data:any)=>{
    return this.http.post("http://localhost:8080/addlibrary",data)
  }

  deleteLibrary=(data:any)=>{
    return this.http.post("http://localhost:8080/deletebook",data)
  }
}
