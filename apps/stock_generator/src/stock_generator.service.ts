import { StockData } from '@app/common/dao/stock.entity';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StockGeneratorService {

  constructor(@InjectRepository(StockData) private readonly stockRepository: Repository<StockData>) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  private async fill() {
    const stocks = await this.stockRepository.find();
    stocks.forEach((element) => {
      element.values.push(Math.random());
    });
    this.stockRepository.save(stocks);
  }
}
