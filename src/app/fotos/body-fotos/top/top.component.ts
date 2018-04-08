import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css', '../body-fotos.component.css']
})
export class TopComponent implements OnInit {
  name:string = '';
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.writting();

  }

  writting(){
    const mexico = 'Mariachi Los Nungaray'
    var cambio = mexico.split('')
    var index = 0
    const intervalTitle = setInterval(()=>{ 

        if(cambio[index] !== undefined){
            this.name=  this.name.concat(cambio[index])
            
        }                

        if(mexico == this.name){
          clearInterval(intervalTitle)
        }
        index++
    }, 200)
}

  gHome(){
    this.router.navigate(['/'],{ fragment: 'contact' });
  }
}
