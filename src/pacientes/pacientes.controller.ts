import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { PacientesService } from './paciente.service';
import { Paciente } from './paciente.entity';



@Controller('paciente')
export class PacientesController {
  constructor(private readonly MedicoServices: PacientesService) {}

  @Get(':id')
  async findOne(@Param('id')id:number): Promise<Paciente>{
    return this.MedicoServices.findOne(id)
  }

}