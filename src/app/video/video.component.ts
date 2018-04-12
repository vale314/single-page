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
  videos=``

  constructor(private httpClient:HttpClient) {
    console.log(window.location.origin)
    this.httpClient.get('/mobile',{responseType: 'json'})
    .subscribe(
      (data:any)=>{
        this.mobile=data.mobile
        if(data.mobile){
          this.videos=``
        }else{
          console.log("pc")
          this.videos=`${window.location.origin}/video`
        }
      }
    )


   }

  

  ngOnInit() {
    
    Observable.interval(1000)
    .takeWhile(() => this.myVar = true)
    .subscribe(i => { 
        // This will be called every 10 seconds until `stopCondition` flag is set to true
    })
  }




}
