import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-companies.dto';
import { Response } from 'express';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const companies = await this.companiesService.findAll();
    if (!companies.length) {
      return res.locals.response('No companies found', null, false, 404);
    }
    return res.locals.response('Companies retrieved successfully', companies);
  }


  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto, @Res() res: Response) {
    const newCompany = await this.companiesService.create(createCompanyDto);
    return res.locals.response('Company created successfully', newCompany);
  }
}
