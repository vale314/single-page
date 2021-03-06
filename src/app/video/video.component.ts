import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/takeWhile";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
})
export class VideoComponent implements OnInit {
  @Input() muted: boolean = true;
  mobile: boolean = false;
  myVar: boolean = false;
  videos: string = "";

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (innerWidth < 499) {
      this.mobile = true;
      this.videos = "";
    } else {
      this.videos = "https://mariachilosnungaray.com.mx/video";
    }
    Observable.interval(1000)
      .takeWhile(() => (this.myVar = true))
      .subscribe((i) => {
        // This will be called every 10 seconds until `stopCondition` flag is set to true
      });
  }
}
