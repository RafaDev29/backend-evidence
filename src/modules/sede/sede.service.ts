import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { Companies } from '../companies/entities/companies.entity';
import { CreateSedeDto } from './dto/create-sede.dto';

@Injectable()
export class SedeService {
  constructor(
    @InjectRepository(Sede)
    private readonly sedeRepository: Repository<Sede>,
    @InjectRepository(Companies)
    private readonly companiesRepository: Repository<Companies>,
  ) {}

  async findAll(): Promise<Sede[]> {
    return this.sedeRepository.find({ relations: ['company'] });
  }

  async create(companyId: number, createSedeDto: CreateSedeDto): Promise<Sede> {
    const company = await this.companiesRepository.findOneBy({ id: companyId });
    if (!company) {
      throw new Error('Company not found');
    }
    const sede = this.sedeRepository.create({ ...createSedeDto, company });
    return this.sedeRepository.save(sede);
  }
}
