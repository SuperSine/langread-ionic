import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupEditorPage } from './group-editor.page';

describe('GroupEditorPage', () => {
  let component: GroupEditorPage;
  let fixture: ComponentFixture<GroupEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
