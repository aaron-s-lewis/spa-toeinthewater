import { Component } from "@angular/core";
import { IUserState } from "src/app/store/state/user.state";
import { Store } from "@ngrx/store";
import { SetUser, UserActions } from "src/app/store/actions/user.actions";
import {
  selectUserName,
  selectUserEmail
} from "src/app/store/selectors/user.selectors";
import { UserModel } from "src/app/user.model";
import { take } from "rxjs/operators";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent {
  title = "toe-in-the-water";
  public constructor(private store: Store<IUserState>) {
    this.user = {
      name: "TestName",
      email: "TestEmail"
    };
  }
  user: UserModel;

  public onClick() {
    console.log("Clicking");

    this.store.dispatch(new SetUser(this.user));

    this.store
      .select(selectUserName)
      .pipe(take(1))
      .subscribe((value: string) => console.log("Name: " + value));

    this.store
      .select(selectUserEmail)
      .pipe(take(1))
      .subscribe((value: string) => console.log("Email: " + value));
  }
}
