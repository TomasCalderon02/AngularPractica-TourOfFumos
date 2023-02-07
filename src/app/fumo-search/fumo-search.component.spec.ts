import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumoSearchComponent } from './fumo-search.component';

describe('FumoSearchComponent', () => {
  let component: FumoSearchComponent;
  let fixture: ComponentFixture<FumoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
