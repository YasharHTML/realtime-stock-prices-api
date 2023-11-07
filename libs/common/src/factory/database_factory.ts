import { ConfigService } from '@nestjs/config';
import { StockData } from '../dao/stock.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DatabaseFactory = {
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    url: configService.get<string>('DB_LINK'),
    synchronize: true, // not for production
    entities: [StockData],
  }),
};
