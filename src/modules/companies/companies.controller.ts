import { Controller, Get, Post, Body, Res, Delete, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-companies.dto';
import { Response } from 'express';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get('/all')
  async findAll(@Res() res: Response) {
    const companies = await this.companiesService.findAll();
    if (!companies.length) {
      return res.locals.response('No companies found', null, false, 404);
    }
    return res.locals.response('Companies retrieved successfully', companies);
  }


  @Post('/add')
  async create(@Body() createCompanyDto: CreateCompanyDto, @Res() res: Response) {
    const newCompany = await this.companiesService.create(createCompanyDto);
    return res.locals.response('Company created successfully', newCompany);
  }


  @Delete('delete/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const isDeleted = await this.companiesService.delete(id);
    if (!isDeleted) {
      return res.locals.response('Company not found', null, false, 404);
    }
    return res.locals.response('Company deleted successfully', null);
  }

}
