import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordTimelinePage } from './word-timeline.page';

describe('WordTimelinePage', () => {
  let component: WordTimelinePage;
  let fixture: ComponentFixture<WordTimelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTimelinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
