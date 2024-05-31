import { Test, TestingModule } from '@nestjs/testing';
import { BrothsController } from './broths.controller';
import { BrothsService } from './broths.service';

describe('BrothsController', () => {
  let controller: BrothsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrothsController],
      providers: [BrothsService],
    }).compile();

    controller = module.get<BrothsController>(BrothsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
