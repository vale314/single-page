import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  id:number=null
  image={id: null,
    name : '',
    description: '',
    link : ''}
  error={error:null}
  hiddens:boolean = true
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
  }

  onSubmit(event){
    event.preventDefault();
    this.httpClient.post(`/find`,{id:this.id})
    .subscribe(
      (data:any)=>{
          this.image = data
          this.hiddens=true
      },
      err =>{
        this.error=err.error
        this.image={id: null,
          name : '',
          description: '',
          link : ''}
        this.hiddens=false
      },
      () => {
          console.log('call API to save');
      }
    )
  }
}


