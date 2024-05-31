import { Test, TestingModule } from '@nestjs/testing';
import { ProteinsService } from './proteins.service';

describe('ProteinsService', () => {
  let service: ProteinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProteinsService],
    }).compile();

    service = module.get<ProteinsService>(ProteinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
