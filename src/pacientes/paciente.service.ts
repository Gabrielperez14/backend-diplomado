import {Get, Injectable, NotFoundException} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Paciente } from './paciente.entity';



@Injectable()
export class PacientesService{
    constructor(
        @InjectRepository(Paciente)
        private readonly pacienteRepository: Repository<Paciente>
    ){}

    async findOne(id:number): Promise<Paciente>{
        const medico = await this.pacienteRepository.findOne({where: {id}});
        if (!medico){
            throw new NotFoundException('Paciente no encontrado')
        }

        return medico; 
    }
}