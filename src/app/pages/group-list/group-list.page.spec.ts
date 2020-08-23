import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupListPage } from './group-list.page';

describe('GroupListPage', () => {
  let component: GroupListPage;
  let fixture: ComponentFixture<GroupListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
