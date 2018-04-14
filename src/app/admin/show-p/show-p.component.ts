import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-p',
  templateUrl: './show-p.component.html',
  styleUrls: ['./show-p.component.css']
})
export class ShowPComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  images:any=[]
  ngOnInit() {
    this.httpClient.get('/showall',{responseType: 'json'})
    .subscribe(
      (data:any)=>{                  
              this.images= data

      }
    )
  }

}
