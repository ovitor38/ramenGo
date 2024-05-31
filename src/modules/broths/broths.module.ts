import { Module } from '@nestjs/common'
import { BrothsService } from './broths.service'
import { BrothsController } from './broths.controller'
import { BrothRepository } from './repository/broth.repository'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [BrothsController],
  providers: [PrismaService, BrothRepository, BrothsService]
})
export class BrothsModule {}
