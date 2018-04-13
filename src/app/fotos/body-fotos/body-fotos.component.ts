import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body-fotos',
  templateUrl: './body-fotos.component.html',
  styleUrls: ['./body-fotos.component.css']
})
export class BodyFotosComponent implements OnInit {
  images:any=[]

  myVar:boolean = true
  constructor(private httpClient: HttpClient) { 
    window.scrollTo(0, 0);
  }

  
   scroll = (): void => {
     var y:number = window.scrollY
     if(y >200)
      this.myVar=false
     if(200>y)
      this.myVar= true
   };

   
  clickScrollTop(){
    window.scrollTo(0, 0);
  }

  ngOnInit() {
          window.addEventListener('scroll', this.scroll, true);
          this.httpClient.get('/showall',{responseType: 'json'})
          .subscribe(
            (data:any)=>{                  
                    this.images= data

            }
          )
  }


}
