import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StockSymbol } from './stock_symbol.enum';

@Entity()
export class StockData {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ type: 'enum', enum: StockSymbol })
  @ApiProperty({
    enum: [
      'AAPL',
      'GOOGL',
      'MSFT',
      'AMZN',
      'FB',
      'TSLA',
      'JPM',
      'NVDA',
      'V',
      'PYPL',
      'NFLX',
      'ORCL',
      'WMT',
      'CSCO',
      'BABA',
    ],
  })
  stockSymbol: StockSymbol;

  @Column({ array: true, type: 'decimal' })
  @ApiProperty({ type: [Number] })
  values: number[];
}
