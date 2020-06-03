import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSPPage } from './list-sp.page';

describe('ListSPPage', () => {
  let component: ListSPPage;
  let fixture: ComponentFixture<ListSPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
