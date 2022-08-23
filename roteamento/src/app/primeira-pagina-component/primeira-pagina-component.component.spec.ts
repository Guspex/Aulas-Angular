import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraPaginaComponentComponent } from './primeira-pagina-component.component';

describe('PrimeiraPaginaComponentComponent', () => {
  let component: PrimeiraPaginaComponentComponent;
  let fixture: ComponentFixture<PrimeiraPaginaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiraPaginaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraPaginaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
