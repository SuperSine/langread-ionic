import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialProfilePage } from './social-profile.page';

describe('SocialProfilePage', () => {
  let component: SocialProfilePage;
  let fixture: ComponentFixture<SocialProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
