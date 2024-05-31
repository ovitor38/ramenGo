import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BrothsModule } from './modules/broths/broths.module';
import { ProteinsModule } from './modules/proteins/proteins.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    UsersModule,
    AuthModule,
    BrothsModule,
    ProteinsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
