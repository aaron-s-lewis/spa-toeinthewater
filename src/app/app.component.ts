import { Component, OnInit } from "@angular/core";
import { IAppState } from "./app.state";
import { selectUserName } from "./store/selectors/user.selectors";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
  //  styleUrls: ['./get-started.component.scss']
})
export class AppComponent {
  title = "Getting started";
}
