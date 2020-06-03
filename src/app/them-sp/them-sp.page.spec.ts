import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThemSPPage } from './them-sp.page';

describe('ThemSPPage', () => {
  let component: ThemSPPage;
  let fixture: ComponentFixture<ThemSPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemSPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemSPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
