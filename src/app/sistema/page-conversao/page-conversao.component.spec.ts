import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConversaoComponent } from './page-conversao.component';

describe('PageConversaoComponent', () => {
  let component: PageConversaoComponent;
  let fixture: ComponentFixture<PageConversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageConversaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
