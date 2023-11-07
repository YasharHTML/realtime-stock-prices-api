import { Controller, Get, Param } from '@nestjs/common';
import { StockService } from './stock.service';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StockData } from '@app/common';
import { StockSymbol } from '@app/common';

@Controller('/api/prices')
@ApiTags('prices')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  @ApiOkResponse({
    type: [StockData],
    description: 'Get stock prices, updates every 5 seconds',
  })
  @ApiInternalServerErrorResponse({ description: 'INTERNAL' })
  getStockPrices() {
    return this.stockService.getStockPrices();
  }

  @Get(':symbol')
  @ApiOkResponse({
    type: StockData,
    description: 'Get stock price, updates every 5 seconds',
  })
  @ApiNotFoundResponse({
    description: 'Stock price not found',
  })
  @ApiInternalServerErrorResponse({ description: 'INTERNAL' })
  getStockPrice(@Param('symbol') stockSymbol: string) {
    return this.stockService.getStockPrice(
      stockSymbol.toUpperCase() as StockSymbol,
    );
  }
}
