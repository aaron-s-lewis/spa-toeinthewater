import { Component } from "@angular/core";
import { IUserState } from "src/app/store/state/user.state";
import { Store } from "@ngrx/store";
import { SetUser } from "src/app/store/actions/user.actions";
import { selectUserName } from "src/app/store/selectors/user.selectors";
import { IUser } from "src/app/user.model";
import { take } from "rxjs/operators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent {
  title = "toe-in-the-water";
  public constructor(private store: Store<IUserState>) {}
  name: any;

  public onClick() {
    console.log("Clicking");
    this.store.dispatch(
      new SetUser({
        name: "name",
        value: "TestName"
      })
    );
    // this.store
    //   .select(selectUserName)
    //   .pipe(take(1))
    //   .subscribe((value: any) => (this.name = value));
  }
}
