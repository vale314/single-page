import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent implements OnInit {
  muted = true;
  name: string = "";

  title = "app";

  constructor() {
    this.writting();
  }

  ngOnInit() {
    //  window.addEventListener('scroll', this.scroll, true);

    window.scrollTo(0, 1);
  }

  // scroll = (): void => {
  //   var y:number = window.scrollY
  //   console.log(y);
  // };

  clickToMuted() {
    this.muted = !this.muted;
  }

  writting() {
    const mexico = "Mariachi Los Nungaray";
    var cambio = mexico.split("");
    var index = 0;
    const intervalTitle = setInterval(() => {
      if (cambio[index] !== undefined) {
        this.name = this.name.concat(cambio[index]);
      }

      if (mexico == this.name) {
        clearInterval(intervalTitle);
      }
      index++;
    }, 200);
  }
}
