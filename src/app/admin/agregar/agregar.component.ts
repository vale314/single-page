import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  datas={
    id: null,
    name : '',
    description: '',
    link : ''
  }


  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    this.httpClient.post(`/add`,this.datas,
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
