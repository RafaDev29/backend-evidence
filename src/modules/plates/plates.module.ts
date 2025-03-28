import { Module } from '@nestjs/common';
import { PlatesService } from './plates.service';
import { PlatesController } from './plates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plate } from './entities/plate.entity';
import { Sede } from '../sede/entities/sede.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plate, Sede])],
  controllers: [PlatesController],
  providers: [PlatesService],
})
export class PlatesModule {}
