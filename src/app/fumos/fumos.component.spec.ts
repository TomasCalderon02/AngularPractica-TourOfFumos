import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumosComponent } from './fumos.component';

describe('FumosComponent', () => {
  let component: FumosComponent;
  let fixture: ComponentFixture<FumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
