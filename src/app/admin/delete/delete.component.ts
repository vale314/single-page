import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:number = null
  error={error:null}
  msj=[]
  hiddens=true
  hiddensT=true
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    event.preventDefault();    
    this.httpClient.post(`/delete`,{id:this.id}
  )
    .subscribe(
      (data:any)=>{
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


