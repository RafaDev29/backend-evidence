import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { SedeService } from './sede.service';
import { Response } from 'express';
import { CreateSedeDto } from './dto/create-sede.dto';

@Controller('sedes')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  // Endpoint para listar todas las sedes
  @Get()
  async findAll(@Res() res: Response) {
    const sedes = await this.sedeService.findAll();
    return res.locals.response('Sedes retrieved successfully', sedes);
  }

  // Endpoint para crear una nueva sede
  @Post(':companyId')
  async create(
    @Param('companyId') companyId: number,
    @Body() createSedeDto: CreateSedeDto, // Aquí usamos el DTO
    @Res() res: Response,
  ) {
    const sede = await this.sedeService.create(companyId, createSedeDto);
    return res.locals.response('Sede created successfully', sede);
  }
}
