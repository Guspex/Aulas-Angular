import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servico1Component } from './servico1.component';

describe('Servico1Component', () => {
  let component: Servico1Component;
  let fixture: ComponentFixture<Servico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servico1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
