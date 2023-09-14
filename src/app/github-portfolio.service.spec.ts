import { TestBed } from '@angular/core/testing';

import { GithubPortfolioService } from './github-portfolio.service';

describe('GithubPortfolioService', () => {
  let service: GithubPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
