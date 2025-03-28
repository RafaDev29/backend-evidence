import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sede } from '../sede/entities/sede.entity';
import { Evidence } from './entities/evidence.entity';

@Module({

imports: [TypeOrmModule.forFeature([Sede , Evidence])],
})
export class EvidenceModule {}
