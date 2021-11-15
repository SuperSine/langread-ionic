import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthClearPage } from './auth-clear.page';

describe('AuthClearPage', () => {
  let component: AuthClearPage;
  let fixture: ComponentFixture<AuthClearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthClearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthClearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
