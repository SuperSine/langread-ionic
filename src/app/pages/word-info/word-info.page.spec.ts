import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordInfoPage } from './word-info.page';

describe('WordInfoPage', () => {
  let component: WordInfoPage;
  let fixture: ComponentFixture<WordInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
