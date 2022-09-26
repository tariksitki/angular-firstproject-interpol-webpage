import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render cards Years Old', () => {
  //   const fixture = TestBed.createComponent(CardsComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('#card-year-span')?.innerHTML).toContain(
  //     'Years Old'
  //   );
  // });

  // it('should render cards Years Old', () => {
  //   const fixture = TestBed.createComponent(CardsComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('#card-country-span')?.textContent).toContain(
  //     'Country'
  //   );
  // });

});
