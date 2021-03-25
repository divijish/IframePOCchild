import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  helloFlag = false;
  obs: Observable<any>;

  data:any[]=["divij"];
  ngOnInit() {

    let childButton = document.querySelector("#childButton");

    childButton.addEventListener("click", ()=> {
      window.parent.postMessage("this is child", "*");
    });

    this.obs = fromEvent(window, "message");

    this.obs.subscribe(res => {
      this.data.push(res.data);
    });

  }

}


