import { HttpClientModule,  } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

      // our test:

  it("should return not undefined", () => {
    const result = service.getPosts('https://ws-public.interpol.int/notices/v1/red');
    expect(result).toBeUndefined()
  } )
});
