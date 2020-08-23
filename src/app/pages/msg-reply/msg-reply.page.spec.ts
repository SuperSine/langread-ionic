import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MsgReplyPage } from './msg-reply.page';

describe('MsgReplyPage', () => {
  let component: MsgReplyPage;
  let fixture: ComponentFixture<MsgReplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgReplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MsgReplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
