import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopMostComponent } from './top-most.component';

describe('TopMostComponent', () => {
  let component: TopMostComponent;
  let fixture: ComponentFixture<TopMostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMostComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopMostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
