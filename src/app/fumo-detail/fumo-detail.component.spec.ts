import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumoDetailComponent } from './fumo-detail.component';

describe('FumoDetailComponent', () => {
  let component: FumoDetailComponent;
  let fixture: ComponentFixture<FumoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
