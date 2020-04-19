import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppProfilePage } from './app-profile.page';

describe('AppProfilePage', () => {
  let component: AppProfilePage;
  let fixture: ComponentFixture<AppProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
