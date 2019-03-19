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
import { Observable } from 'rxjs';
import { selectUserName } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-email-me',
  templateUrl: './email-me.component.html',
  styleUrls: ['./email-me.component.scss']
})
export class EmailMeComponent {
  title = 'Call me back';

  public constructor(private store: Store<IUserState>) {
    this.formBuilder = new FormBuilder();
  }
  private formBuilder: FormBuilder;
  emailControl: FormControl;
  emailMeFormGroup: FormGroup;
  givenName$: Observable<string>;

  ngOnInit(): void {

    this.givenName$ = this.store.select(selectUserName);

    this.emailControl = new FormControl("", {
      validators: [Validators.required]
    });

    this.emailMeFormGroup = this.formBuilder.group({
      emailCtrl: this.emailControl,
    });
  }
  public onClick() {
    console.log("Clicking");
    this.store.dispatch(
      new SetUserModuleValue({
        name: "email",
        value: this.emailControl.value
      })
    );
  }
}
