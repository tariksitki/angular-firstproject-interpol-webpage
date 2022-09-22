import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

/// our test codes:
import { DebugElement } from '@angular/core'; // for passing to dom elements
import { HttpClientModule } from '@angular/common/http';

describe('FormComponent', () => {
  let component: FormComponent;
  // with fixture can we get data from componentInstance
  let fixture: ComponentFixture<FormComponent>;
  let debugElement: DebugElement; // to dom elements

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('endpoint value', () => {
    // expect(component.endpoint).toBe("");
    // fixture.componentInstance.endpoint;
    expect(fixture.componentInstance.endpoint).toBe("");

  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-header')?.textContent).toContain(
      'Filter'
    );
  });
});
