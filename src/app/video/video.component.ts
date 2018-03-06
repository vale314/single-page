import { Component, OnInit, EventEmitter,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() muted:boolean;
  mobile:boolean

  constructor(private httpClient:HttpClient) {
    this.httpClient.get('/mobile',{responseType: 'json'})
    .subscribe(
      (data:any)=>{
        console.log(data)
        this.mobile=data.mobile;
      }
    )
   }

  ngOnInit() {
    
  }



}
