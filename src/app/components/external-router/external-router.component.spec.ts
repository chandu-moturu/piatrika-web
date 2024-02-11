import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalRouterComponent } from './external-router.component';

describe('ExternalRouterComponent', () => {
  let component: ExternalRouterComponent;
  let fixture: ComponentFixture<ExternalRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
