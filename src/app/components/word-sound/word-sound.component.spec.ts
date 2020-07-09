import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordSoundComponent } from './word-sound.component';

describe('WordSoundComponent', () => {
  let component: WordSoundComponent;
  let fixture: ComponentFixture<WordSoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSoundComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WordSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
