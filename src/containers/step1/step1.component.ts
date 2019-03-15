import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { IUserState } from "src/app/store/state/user.state";
import { SetUserModuleValue } from "src/app/store/actions/user.actions";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"]
})
export class Step1Component implements OnInit {
  isLinear = true;
  nameFormControl: FormControl;
  howFormControl: FormControl;
  whatFormControl: FormControl;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  private formBuilder: FormBuilder;
  public givenName: string;

  constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
  }

  ngOnInit() {
    this.nameFormControl = new FormControl("", {
      validators: [Validators.required]
    });
    this.howFormControl = new FormControl("", {
      validators: [Validators.required]
    });
    this.whatFormControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: this.nameFormControl
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: this.howFormControl
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: this.whatFormControl
    });
  }

  public submit1(): void {
    this.store.dispatch(
      new SetUserModuleValue({
        name: "givenName",
        value: this.nameFormControl.value
      })
    );
    this.givenName = this.nameFormControl.value;
  }

  public submit2(): void {
    this.store.dispatch(
      new SetUserModuleValue({
        name: "retirementChoice",
        value: this.howFormControl.value
      })
    );
  }

  public submit3(): void {
    this.store.dispatch(
      new SetUserModuleValue({
        name: "lifestyleChoice",
        value: this.whatFormControl.value
      })
    );
  }
}
