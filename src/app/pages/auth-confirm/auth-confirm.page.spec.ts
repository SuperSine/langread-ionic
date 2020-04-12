import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthConfirmPage } from './auth-confirm.page';

describe('AuthConfirmPage', () => {
  let component: AuthConfirmPage;
  let fixture: ComponentFixture<AuthConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
