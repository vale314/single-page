import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:number = null
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


