import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordTempComponent } from './word-temp.component';

describe('WordTempComponent', () => {
  let component: WordTempComponent;
  let fixture: ComponentFixture<WordTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTempComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
