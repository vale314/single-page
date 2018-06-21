import { Component, OnInit, EventEmitter,Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit  {
  @Input() muted:boolean;
  mobile:boolean
  myVar:boolean = false;
  videos:string=("http://192.168.1.76:4200/video")

  constructor(private httpClient:HttpClient) {
    console.log(window.location.origin)
    this.httpClient.get('/video',{responseType: 'json'})
    .subscribe(
      (data:any)=>{
      }  
    ) 


   }

  video(){

    return ("http://192.168.1.76:4200/video")
  }

  ngOnInit() {
    
    Observable.interval(1000)
    .takeWhile(() => this.myVar = true)
    .subscribe(i => { 
        // This will be called every 10 seconds until `stopCondition` flag is set to true
    })
  }




}
