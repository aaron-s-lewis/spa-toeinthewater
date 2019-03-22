import { Component } from "@angular/core";
import { IUserState } from "src/app/store/state/user.state";
import { Store } from "@ngrx/store";
import { SetUserModuleValue, SubmitApplication } from "src/app/store/actions/user.actions";
import { take } from "rxjs/operators";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { selectUserName, selectUser } from "src/app/store/selectors/user.selectors";
import { UserModel } from 'src/app/user.model';

@Component({
  selector: "app-email-me",
  templateUrl: "./email-me.component.html",
  styleUrls: ["./email-me.component.scss"]
})
export class EmailMeComponent {
  title = "Call me back";

  public constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
    this.givenNameControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.emailControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.emailMeFormGroup = this.formBuilder.group({
      givenNameCtrl: this.givenNameControl,
      emailCtrl: this.emailControl
    });
  }

  private formBuilder: FormBuilder;
  emailControl: FormControl;
  givenNameControl: FormControl;
  emailMeFormGroup: FormGroup;

  ngOnInit(): void {
    this.store
      .select(selectUserName)
      .pipe(take(1))
      .subscribe(v => {
        this.givenNameControl.setValue(v);
      });
  }

  public onClick() {
    console.log("Clicking");
    this.store.dispatch(
      new SetUserModuleValue({
        name: "givenName",
        value: this.givenNameControl.value
      })
    );
    this.store.dispatch(
      new SetUserModuleValue({
        name: "email",
        value: this.emailControl.value
      })
    );

    this.store.select(selectUser).pipe(take(1)).subscribe((userData: UserModel) => {
      this.store.dispatch(new SubmitApplication(userData));
    });
  }
}
