import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-fotos',
  templateUrl: './body-fotos.component.html',
  styleUrls: ['./body-fotos.component.css']
})
export class BodyFotosComponent implements OnInit {
  images:any=[
    {
      link:'https://image.ibb.co/ejLTux/Whats_App_Image_2018_04_09_at_7_41_49_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/mB61Ex/Whats_App_Image_2018_04_08_at_5_36_35_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/cvmOSH/Whats_App_Image_2018_04_08_at_5_36_30_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/nuEz1c/Whats_App_Image_2018_04_08_at_5_36_22_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/ncFTux/Whats_App_Image_2018_04_08_at_5_36_12_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/d7EcnH/Whats_App_Image_2018_04_08_at_5_35_59_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/h6eA7H/Whats_App_Image_2018_04_08_at_5_35_50_PM.jpg',
      title:'Snap',
      description:'Donec vitae hendrerit faucibus.'
    },
    {
      link:'https://image.ibb.co/dwQTux/Whats_App_Image_2018_04_09_at_7_41_55_PM.jpg',
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
  constructor() { 
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
          
  }


}
