import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RegistrationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'toe-in-the-water'`, () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('toe-in-the-water');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to toe-in-the-water!');
  });
});
