import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { selectUserName } from 'src/app/store/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { IUserState } from 'src/app/store/state/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  requirePersonalise: boolean;

  public constructor(private store: Store<IUserState>) {}

  public givenname$: Observable<string>;

  ngOnInit() {
    this.givenname$ = this.store.select(selectUserName);
  }

}
