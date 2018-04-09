import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string=''
  password:string= ''

  constructor(private httpClient:HttpClient, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(event){
    event.preventDefault();    
    this.httpClient.post(`/fotos`,{
      email:this.email,
      password:this.password
    },
  )
    .subscribe(
      (data:any)=>{
        console.log(data)
        if(data.status == 200){
          this.router.navigate(['/admin']);
        }

      },
      err =>{console.log(err)},
      () => {
          console.log('call API to save');
      }
    )
  }
}
