import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { SedeService } from './sede.service';
import { Response } from 'express';
import { CreateSedeDto } from './dto/create-sede.dto';

@Controller('sedes')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Get('/all')
  async findAll(@Res() res: Response) {
    const sedes = await this.sedeService.findAll();
    return res.locals.response('Sedes retrieved successfully', sedes);
  }

  @Post(':companyId')
  async create(
    @Param('companyId') companyId: number,
    @Body() createSedeDto: CreateSedeDto,
    @Res() res: Response,
  ) {
    const sede = await this.sedeService.create(companyId, createSedeDto);
    return res.locals.response('Sede created successfully', sede);
  }
}
