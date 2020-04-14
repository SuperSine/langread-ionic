import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthEmailPage } from './auth-email.page';

describe('AuthEmailPage', () => {
  let component: AuthEmailPage;
  let fixture: ComponentFixture<AuthEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
