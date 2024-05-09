import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMoedasComponent } from './page-moedas.component';

describe('PageMoedasComponent', () => {
  let component: PageMoedasComponent;
  let fixture: ComponentFixture<PageMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMoedasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
