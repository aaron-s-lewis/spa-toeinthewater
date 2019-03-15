import { Component } from '@angular/core';
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
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss']
})
export class CallBackComponent {
  title = 'Call me back';

  public constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
  }
  private formBuilder: FormBuilder;
  phoneNumberControl: FormControl;
  callBackFormGroup: FormGroup;

  ngOnInit(): void {
    this.phoneNumberControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.callBackFormGroup = this.formBuilder.group({
      phoneCtrl: this.phoneNumberControl,
    });
  }
  public onClick() {
    console.log("Clicking");
    this.store.dispatch(
      new SetUserModuleValue({
        name: "phone",
        value: this.phoneNumberControl.value
      })
    );
  }
}
