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

  error={error:null}
  msj=[]
  hiddens=true
  hiddensT=true

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

        this.msj=data.status
        this.hiddensT=false
        this.hiddens=true

      },
      err =>{
        this.error= err.error
        this.hiddens=false
        this.hiddensT=true
      },
      () => {
          console.log('call API to save');
      }
    )
  }
}
