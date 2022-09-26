import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

/// our test codes:
import { DebugElement } from '@angular/core'; // for passing to dom elements
import { HttpClientModule } from '@angular/common/http';
  ///  very very important
import { FormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  // with fixture can we get data from componentInstance
  let fixture: ComponentFixture<FormComponent>;
  let debugElement: DebugElement; // to dom elements

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientModule, FormsModule],  /// important
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('endpoint value', () => {
  //   // expect(component.endpoint).toBe("");
  //   // fixture.componentInstance.endpoint;
  //   expect(fixture.componentInstance.endpoint).toEqual("");

  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-header')?.textContent).toContain(
      'Filter Criteria'
    );
  });

  it('should render form Lastname', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('#form-lastname-label')?.textContent
    ).toContain('Lastname');
  });

  it('should render form Gender Male', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#form-label-male')?.textContent).toContain(
      'Male'
    );
  });

  it('should render form Wanted By Options Afghanistan', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('#form-wanted-options')?.textContent
    ).toContain('Afghanistan');
  });

  it('should render form Search Button', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.form-button')?.textContent).toContain(
      'SEARCH'
    );
  });
});
