import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companies } from './entities/companies.entity';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Companies])],
  providers: [CompaniesService],
  controllers: [CompaniesController],
})
export class CompaniesModule {}
