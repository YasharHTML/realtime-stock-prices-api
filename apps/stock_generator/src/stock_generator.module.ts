import { Module } from '@nestjs/common';
import { StockGeneratorService } from './stock_generator.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseFactory, StockData } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: DatabaseFactory.useFactory,
    }),
    TypeOrmModule.forFeature([StockData]),
    ScheduleModule.forRoot(),
  ],
  providers: [StockGeneratorService],
})
export class StockGeneratorModule {}
