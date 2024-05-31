import { Test, TestingModule } from '@nestjs/testing';
import { BrothsService } from './broths.service';

describe('BrothsService', () => {
  let service: BrothsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrothsService],
    }).compile();

    service = module.get<BrothsService>(BrothsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
