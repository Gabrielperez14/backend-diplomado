import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './cita.entity';
import { CitasController } from './citas.controller';
import { CitasServices } from './citas.service';
import { Medico } from 'src/medicos/medico.entity';
import { Paciente } from 'src/pacientes/paciente.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cita]), TypeOrmModule.forFeature([Medico]), TypeOrmModule.forFeature([Paciente])],
  controllers: [CitasController],
  providers: [CitasServices],
  exports: [],
})
export class CitasModule {}