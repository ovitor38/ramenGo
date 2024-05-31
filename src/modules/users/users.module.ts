import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { HasherAdapterModule } from "src/adapters/hasher/hasher.module";
import { PrismaService } from "src/prisma.service";
import { UserPrismaRepository } from "./repository/user.repository";

@Module({
  imports: [HasherAdapterModule],
  controllers: [UsersController],
  providers: [PrismaService, UserPrismaRepository, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
