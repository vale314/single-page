import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  muted=true

  title = 'app';



 
  ngOnInit() {
    
    //  window.addEventListener('scroll', this.scroll, true);
     
     window.scrollTo(0,1);
     
      
 
  }



  // scroll = (): void => {
  //   var y:number = window.scrollY
  //   console.log(y);
  // };

  clickToMuted(){
    console.log("hello");
    this.muted= !this.muted
  }




  
}
