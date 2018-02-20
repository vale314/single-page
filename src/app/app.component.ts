import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  muted=false

  title = 'app';

  ngOnInit() {
    
    // window.addEventListener('scroll', this.scroll, true);
  }
  // scroll = (): void => {
  //   var y:number = window.scrollY
   
  // };
  clickToMuted(){
    this.muted= !this.muted
  }
}
