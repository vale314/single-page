import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  click(){
    console.log("hello")
    window.scrollTo(0,1275);
  }
  gPhotos(){
    this.router.navigate(['/fotos']);
  }
}
