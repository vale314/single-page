import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

  click(){
    console.log("hello")
    window.scrollTo(0,1275);
  }
}
