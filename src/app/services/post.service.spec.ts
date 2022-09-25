import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule], // important for testing
    }).compileComponents();
    service = TestBed.inject(PostService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

      // our test:

  // it("should return not undefined", () => {
  //   const result = service.getPosts('https://ws-public.interpol.int/notices/v1/red');
  //   expect(result).toBeUndefined()
  // } )
});
