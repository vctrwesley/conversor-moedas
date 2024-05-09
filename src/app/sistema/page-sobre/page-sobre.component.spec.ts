import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSobreComponent } from './page-sobre.component';

describe('PageSobreComponent', () => {
  let component: PageSobreComponent;
  let fixture: ComponentFixture<PageSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSobreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
