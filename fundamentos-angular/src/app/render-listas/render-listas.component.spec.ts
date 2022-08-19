import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderListasComponent } from './render-listas.component';

describe('RenderListasComponent', () => {
  let component: RenderListasComponent;
  let fixture: ComponentFixture<RenderListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
