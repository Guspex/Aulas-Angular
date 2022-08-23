import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundapaginaComponent } from './segundapagina.component';

describe('SegundapaginaComponent', () => {
  let component: SegundapaginaComponent;
  let fixture: ComponentFixture<SegundapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundapaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
