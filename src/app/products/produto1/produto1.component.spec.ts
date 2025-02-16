import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produto1Component } from './produto1.component';

describe('Produto1Component', () => {
  let component: Produto1Component;
  let fixture: ComponentFixture<Produto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Produto1Component]
    });
    fixture = TestBed.createComponent(Produto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
