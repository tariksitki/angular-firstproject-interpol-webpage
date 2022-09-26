import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
// Http testing module
import { HttpClientTestingModule } from '@angular/common/http/testing';
// router testing:
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render cards Years Old', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('#detail-identity-header')?.textContent
    ).toContain('Identity Particulars');
  });


  it('should render cards Years Old', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#detail-placebirth')?.textContent).toContain(
      'Place of Birth'
    );
  });


  it('should render cards Years Old', () => {
    const fixture = TestBed.createComponent(DetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#detail-language')?.textContent).toContain(
      'Language Spoken'
    );
  });
});
