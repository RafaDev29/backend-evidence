import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
    // Validar si la compañía existe
    const company = await this.companiesRepository.findOne({
      where: { id: companyId },
    });

    if (!company) {
      throw new NotFoundException('Company not found'); // Esto lanza un error 404
    }

    // Validar si el código ya existe en otra sede de la misma compañía
    const existingSede = await this.sedeRepository.findOne({
      where: { code: createSedeDto.code, company: { id: companyId } },
    });

    if (existingSede) {
      throw new ConflictException(
        'A sede with this code already exists for this company',
      );
    }

    // Crear y guardar la sede si la compañía existe y el código es único
    const newSede = this.sedeRepository.create({ ...createSedeDto, company });
    return await this.sedeRepository.save(newSede);
  }
}
