import { Module } from '@nestjs/common'
import { ProteinsService } from './proteins.service'
import { ProteinsController } from './proteins.controller'
import { ProteinRepository } from './repository/protein.repostory'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [ProteinsController],
  providers: [PrismaService, ProteinRepository, ProteinsService]
})
export class ProteinsModule {}
