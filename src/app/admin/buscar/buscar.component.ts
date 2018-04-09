import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  id:number=null
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    event.preventDefault();    
    this.httpClient.post(`/find`,{id:this.id}
  )
    .subscribe(
      (data:any)=>{
        console.log(data)
        if(data.status == 200){
         console.log('listo')
        }

      },
      err =>{console.log(err)},
      () => {
          console.log('call API to save');
      }
    )
  }
}


