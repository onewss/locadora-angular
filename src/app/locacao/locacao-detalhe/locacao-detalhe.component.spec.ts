import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoDetalheComponent } from './locacao-detalhe.component';

describe('LocacaoDetalheComponent', () => {
  let component: LocacaoDetalheComponent;
  let fixture: ComponentFixture<LocacaoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocacaoDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
