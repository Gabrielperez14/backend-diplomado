import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { Medico } from './medico.entity';


@Controller('medico')
export class MedicosController {
  constructor(private readonly MedicoServices: MedicosService) {}

  @Get(':id')
  async findOne(@Param('id')id:number): Promise<Medico>{
    return this.MedicoServices.findOne(id)
  }

}