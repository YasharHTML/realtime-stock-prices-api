import { Module } from '@nestjs/common';
import { PriceModule } from './stock/stock.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockData } from '../../../libs/common/src/dao/stock.entity';
import { DatabaseFactory } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: DatabaseFactory.useFactory,
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    PriceModule,
  ],
})
export class AppModule {}
