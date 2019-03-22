import { Component } from "@angular/core";
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
import { selectUserName } from "src/app/store/selectors/user.selectors";

@Component({
  selector: "app-call-back",
  templateUrl: "./call-back.component.html",
  styleUrls: ["./call-back.component.scss"]
})
export class CallBackComponent {
  title = "Call me back";

  public constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
    this.phoneFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.givenNameFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.helpChoiceFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.callBackFormGroup = this.formBuilder.group({
      givenNameCtrl: this.givenNameFormControl,
      phoneCtrl: this.phoneFormControl,
      helpChoiceCtrl: this.helpChoiceFormControl
    });
  }
  private formBuilder: FormBuilder;
  phoneFormControl: FormControl;
  givenNameFormControl: FormControl;
  helpChoiceFormControl: FormControl;
  callBackFormGroup: FormGroup;

  ngOnInit(): void {
    this.store
      .select(selectUserName)
      .pipe(take(1))
      .subscribe(v => this.givenNameFormControl.setValue(v));
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
        name: "phone",
        value: this.phoneFormControl.value
      })
    );
    this.store.dispatch(
      new SetUserModuleValue({
        name: "helpChoice",
        value: this.helpChoiceFormControl.value
      })
    );
  }
}
