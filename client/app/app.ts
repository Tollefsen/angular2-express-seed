import {Component} from "@angular/core";
import {MainComponent} from "./components/main";


@Component({
  selector: "my-app",
  template: '<main></main>',
  directives: [MainComponent],
  providers: []
})


export class App {
}
