import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-fotos',
  templateUrl: './body-fotos.component.html',
  styleUrls: ['./body-fotos.component.css']
})
export class BodyFotosComponent implements OnInit {
  images:any=[
    {
      link:'../../../assets/images/g1.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g2.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g3.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g4.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g5.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g6.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g7.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g8.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'../../../assets/images/g9.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    }
   

  ]

  myVar:boolean = true
  constructor() { }

  
   scroll = (): void => {
     var y:number = window.scrollY
     console.log(y)
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
          
  }


}
