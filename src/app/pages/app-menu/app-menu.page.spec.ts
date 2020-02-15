import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppMenuPage } from './app-menu.page';

describe('AppMenuPage', () => {
  let component: AppMenuPage;
  let fixture: ComponentFixture<AppMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
