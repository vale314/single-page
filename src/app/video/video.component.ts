import { Component, OnInit, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() muted:boolean;
  
  constructor() {
   
   }

  ngOnInit() {
  }


}
