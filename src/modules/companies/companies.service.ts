import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Companies } from './entities/companies.entity';
import { CreateCompanyDto } from './dto/create-companies.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Companies)
    private readonly companiesRepository: Repository<Companies>,
  ) {}

  async findAll(): Promise<Companies[]> {
    return await this.companiesRepository.find();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Companies> {
    const existingCompany = await this.companiesRepository.findOne({
      where: { ruc: createCompanyDto.ruc },
    });

    if (existingCompany) {
      throw new ConflictException('A company with this RUC already exists');
    }
    const newCompany = this.companiesRepository.create(createCompanyDto);
    return await this.companiesRepository.save(newCompany);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.companiesRepository.delete(id);
    return result.affected > 0;
  }
}
