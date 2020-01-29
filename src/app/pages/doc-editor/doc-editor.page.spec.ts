import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocEditorPage } from './doc-editor.page';

describe('DocEditorPage', () => {
  let component: DocEditorPage;
  let fixture: ComponentFixture<DocEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
