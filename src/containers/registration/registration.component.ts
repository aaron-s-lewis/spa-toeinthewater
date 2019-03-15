import { Component, OnInit } from "@angular/core";
import { IUserState } from "src/app/store/state/user.state";
import { Store } from "@ngrx/store";
import { SetUserModuleValue } from "src/app/store/actions/user.actions";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

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
  emailFormControl: FormControl;
  passwordFormControl: FormControl;
  registrationFormGroup: FormGroup;

  ngOnInit(): void {
    this.emailFormControl = new FormControl("", {
      validators: [Validators.required]
    });
    this.passwordFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.registrationFormGroup = this.formBuilder.group({
      emailCtrl: this.emailFormControl,
      passwordCtrl: this.passwordFormControl
    });
  }

  public onClick() {
    console.log("Clicking");
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
