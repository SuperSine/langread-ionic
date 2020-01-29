import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagPickerPage } from './tag-picker.page';

describe('TagPickerPage', () => {
  let component: TagPickerPage;
  let fixture: ComponentFixture<TagPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagPickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
