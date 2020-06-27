import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppAboutPage } from './app-about.page';

describe('AppAboutPage', () => {
  let component: AppAboutPage;
  let fixture: ComponentFixture<AppAboutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
