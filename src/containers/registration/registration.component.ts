import { Component, OnInit } from "@angular/core";
import { IUserState } from "src/app/store/state/user.state";
import { Store } from "@ngrx/store";
import { SetUserModuleValue } from "src/app/store/actions/user.actions";
import { take } from "rxjs/operators";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Observable } from "rxjs";
import { selectUserName } from "src/app/store/selectors/user.selectors";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  title = "toe-in-the-water";
  public constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
  }

  private formBuilder: FormBuilder;
  givenNameFormControl: FormControl;
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  registrationFormGroup: FormGroup;
  givenName: string;

  ngOnInit(): void {
    this.store
      .select(selectUserName)
      .pipe(take(1))
      .subscribe(v => (this.givenName = v));

    this.givenNameFormControl = new FormControl(this.givenName, {
      validators: [Validators.required]
    });
    this.emailFormControl = new FormControl("", {
      validators: [Validators.required]
    });
    this.passwordFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.registrationFormGroup = this.formBuilder.group({
      givenNameCtrl: this.givenNameFormControl,
      emailCtrl: this.emailFormControl,
      passwordCtrl: this.passwordFormControl
    });
  }

  public onClick() {
    console.log("Clicking");
    this.store.dispatch(
      new SetUserModuleValue({
        name: "givenName",
        value: this.givenNameFormControl.value
      })
    );
    this.store.dispatch(
      new SetUserModuleValue({
        name: "email",
        value: this.emailFormControl.value
      })
    );
    this.store.dispatch(
      new SetUserModuleValue({
        name: "password",
        value: this.passwordFormControl.value
      })
    );
    // this.store
    //   .select(selectUserName)
    //   .pipe(take(1))
    //   .subscribe((value: string) => console.log("Name: " + value));

    // this.store
    //   .select(selectUserEmail)
    //   .pipe(take(1))
    //   .subscribe((value: string) => console.log("Email: " + value));
  }
}
