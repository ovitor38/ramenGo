import { Test, TestingModule } from '@nestjs/testing';
import { ProteinsController } from './proteins.controller';
import { ProteinsService } from './proteins.service';

describe('ProteinsController', () => {
  let controller: ProteinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProteinsController],
      providers: [ProteinsService],
    }).compile();

    controller = module.get<ProteinsController>(ProteinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
