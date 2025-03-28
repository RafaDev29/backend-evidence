import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './modules/companies/companies.module';
import { databaseConfig } from './config/database.config';
import { SedeModule } from './modules/sede/sede.module';
import { EvidenceService } from './modules/evidence/evidence.service';
import { EvidenceController } from './modules/evidence/evidence.controller';
import { EvidenceModule } from './modules/evidence/evidence.module';
import { PlatesModule } from './modules/plates/plates.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    CompaniesModule,
    SedeModule,
    EvidenceModule,
    PlatesModule,
   
  ],
  providers: [EvidenceService],
  controllers: [EvidenceController],
})
export class AppModule {}
