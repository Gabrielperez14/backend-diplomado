import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './paciente.entity';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './paciente.service';




@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  controllers: [PacientesController],
  providers: [PacientesService],
  exports: [],
})
export class PacienteModule {}