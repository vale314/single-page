import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { DataService } from './auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private DataService:DataService) {
    
   }

  ngOnInit() {
    this.DataService.get();
  }



  click(route){
    this.router.navigate([route])
  }
}
