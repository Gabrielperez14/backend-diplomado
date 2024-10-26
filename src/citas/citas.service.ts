import {Injectable, NotFoundException} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cita } from './cita.entity'
import { CreateCitaDto } from './dto/crear-cita.dto'
import { UpdateCitaDto } from './dto/editar-cita.dto'
import { Paciente } from 'src/pacientes/paciente.entity'
import { Medico } from 'src/medicos/medico.entity'


@Injectable()
export class CitasServices{
    constructor(
        @InjectRepository(Cita)
        private readonly citaRepository: Repository<Cita>,

        @InjectRepository(Paciente)
        private readonly pacienteRepository: Repository<Paciente>,

        @InjectRepository(Medico)
        private readonly medicoRepository: Repository<Medico>
    ){}

    async create(createCitaDto:CreateCitaDto):Promise<Cita>{
        
        const { pacienteId, medicoId, fecha_hora, motivo} = createCitaDto

        const paciente = await this.pacienteRepository.findOne({where: {id: pacienteId}})
        if (!paciente){
            throw new NotFoundException('no se encontro el paciente')
        }

        const medico = await this.medicoRepository.findOne({where: {id: medicoId}})
        if (!medico){
            throw new NotFoundException('no se encontro al medico')
        }

        const cita = this.citaRepository.create({
            fecha_hora,
            motivo,
            paciente,
            medico,
        })

        return this.citaRepository.save(cita)
    }

    async findAll(): Promise<Cita[]>{
        return this.citaRepository.find({relations: ['paciente', 'medico']})
    }

    async findOne(id: number): Promise<Cita> {
        const cita = await this.citaRepository.findOne({ where: { id } });
        if (!cita) {
          throw new NotFoundException('Appointment not found');
        }
        return cita;
      }

    async remove(id: number): Promise<Cita>{
        const cita = await this.findOne(id);
        return this.citaRepository.remove(cita)
    }

    async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
        const cita = await this.findOne(id);
        Object.assign(cita, updateCitaDto);
        return this.citaRepository.save(cita);
      }

    async findOneCita(id:number): Promise<Cita>{
        const cita = await this.citaRepository.findOne({where: {id}, relations: ['paciente', 'medico']});
        if (!cita){
            throw new NotFoundException('Paciente no encontrado')
        }

        return cita; 
    }

}