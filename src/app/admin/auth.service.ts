import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable()

export class DataService {

  constructor(private httpClient:HttpClient,private http:Http, private router:Router) {
    
   }

  get(){
    let headers = new Headers();
    headers.append('Authorization', JSON.stringify(localStorage.getItem('token'))); 
    this.http.get('/admin',{headers:headers}).subscribe(
      res =>  {},
      (err)=>{
        localStorage.clear();
        this.router.navigate(['/'])
      }); 
      ()=>{
        console.log("erro")
      }
  }
}

