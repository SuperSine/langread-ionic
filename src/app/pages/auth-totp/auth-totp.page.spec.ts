import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthTotpPage } from './auth-totp.page';

describe('AuthTotpPage', () => {
  let component: AuthTotpPage;
  let fixture: ComponentFixture<AuthTotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthTotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthTotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
