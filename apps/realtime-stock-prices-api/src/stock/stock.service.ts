import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StockData } from '@app/common/dao/stock.entity';
import { StockSymbol } from '@app/common/dao/stock_symbol.enum';

@Injectable()
export class StockService {
  private async _initSQL() {
    const count = await this.stockRepository.count();
    if (!count) {
      const data = [
        StockSymbol.AAPL,
        StockSymbol.GOOGL,
        StockSymbol.MSFT,
        StockSymbol.AMZN,
        StockSymbol.FB,
        StockSymbol.TSLA,
        StockSymbol.JPM,
        StockSymbol.NVDA,
        StockSymbol.V,
        StockSymbol.PYPL,
        StockSymbol.NFLX,
        StockSymbol.ORCL,
        StockSymbol.WMT,
        StockSymbol.CSCO,
        StockSymbol.BABA,
      ].map((stockSymbol) => ({ stockSymbol, values: [] }));
      return this.stockRepository.save(data);
    }
  }

  constructor(
    @InjectRepository(StockData)
    private readonly stockRepository: Repository<StockData>,
  ) {
    this._initSQL();
  }

  async getStockPrices() {
    return this.stockRepository.find();
  }

  async getStockPrice(stockSymbol: StockSymbol) {
    const stock = await this.stockRepository.findOne({
      where: { stockSymbol: stockSymbol },
    });

    if (stock === undefined) throw new NotFoundException();

    return stock;
  }
}
