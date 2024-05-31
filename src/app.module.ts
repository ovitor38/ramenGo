import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BrothsModule } from './modules/broths/broths.module';
import { ProteinsModule } from './modules/proteins/proteins.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    UsersModule,
    AuthModule,
    BrothsModule,
    ProteinsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
