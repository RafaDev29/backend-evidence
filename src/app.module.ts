import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './modules/companies/companies.module';
import { databaseConfig } from './config/database.config';
import { SedeModule } from './modules/sede/sede.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CompaniesModule,
    SedeModule,
  ],
})
export class AppModule {}
