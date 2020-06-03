import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrangHienThiSpPage } from './trang-hien-thi-sp.page';

describe('TrangHienThiSpPage', () => {
  let component: TrangHienThiSpPage;
  let fixture: ComponentFixture<TrangHienThiSpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangHienThiSpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrangHienThiSpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
