import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupProfilePage } from './group-profile.page';

describe('GroupProfilePage', () => {
  let component: GroupProfilePage;
  let fixture: ComponentFixture<GroupProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
