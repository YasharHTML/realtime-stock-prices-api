import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockData } from '@app/common';

@Module({
  imports: [TypeOrmModule.forFeature([StockData])],
  controllers: [StockController],
  providers: [StockService],
})
export class PriceModule {}
