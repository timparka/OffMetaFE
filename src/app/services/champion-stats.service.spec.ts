import { TestBed } from '@angular/core/testing';

import { ChampionStatsService } from './champion-stats.service';

describe('ChampionStatsServiceService', () => {
  let service: ChampionStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
