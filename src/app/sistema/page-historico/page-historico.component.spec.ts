import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHistoricoComponent } from './page-historico.component';

describe('PageHistoricoComponent', () => {
  let component: PageHistoricoComponent;
  let fixture: ComponentFixture<PageHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
