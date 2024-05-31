import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BrothsModule } from './modules/broths/broths.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    UsersModule,
    AuthModule,
    BrothsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
