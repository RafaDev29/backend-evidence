import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plate } from './entities/plate.entity';
import { CreatePlateDto } from './dto/create-plate.dto';
import { UpdatePlateDto } from './dto/update-plate.dto';

@Injectable()
export class PlatesService {
  constructor(
    @InjectRepository(Plate)
    private readonly plateRepository: Repository<Plate>,
  ) {}

  async create(createPlateDto: CreatePlateDto) {
    const { PlaVeh } = createPlateDto;
  
    // Verificar si la placa ya existe
    const existingPlate = await this.plateRepository.findOne({ where: { PlaVeh } });
  
    if (existingPlate) {
      throw new ConflictException(`La placa ${PlaVeh} ya existe.`);
    }
  

    const newPlate = this.plateRepository.create({
      ...createPlateDto,
      status: false, 
    });
  
    return await this.plateRepository.save(newPlate);
  }
  

  async findAll() {
    return await this.plateRepository.find();
  }

  async findOne(id: number) {
    const plate = await this.plateRepository.findOne({ where: { id } });

    if (!plate) {
      throw new NotFoundException(`No se encontró la placa con ID ${id}`);
    }

    return plate;
  }

  async update(id: number, updatePlateDto: UpdatePlateDto) {
    const plate = await this.plateRepository.findOne({ where: { id } });

    if (!plate) {
      throw new NotFoundException(`No se encontró la placa con ID ${id}`);
    }

    Object.assign(plate, updatePlateDto);
    return await this.plateRepository.save(plate);
  }

  async remove(id: number) {
    const plate = await this.plateRepository.findOne({ where: { id } });

    if (!plate) {
      throw new NotFoundException(`No se encontró la placa con ID ${id}`);
    }

    await this.plateRepository.remove(plate);
    return { message: `Placa con ID ${id} eliminada correctamente` };
  }
}
