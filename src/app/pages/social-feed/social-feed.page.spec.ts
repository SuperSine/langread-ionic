import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialFeedPage } from './social-feed.page';

describe('SocialFeedPage', () => {
  let component: SocialFeedPage;
  let fixture: ComponentFixture<SocialFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
