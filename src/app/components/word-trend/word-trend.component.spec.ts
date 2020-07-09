import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordTrendComponent } from './word-trend.component';

describe('WordTrendComponent', () => {
  let component: WordTrendComponent;
  let fixture: ComponentFixture<WordTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTrendComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
