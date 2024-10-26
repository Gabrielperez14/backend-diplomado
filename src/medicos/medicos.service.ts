import {Get, Injectable, NotFoundException} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Medico } from './medico.entity'



@Injectable()
export class MedicosService{
    constructor(
        @InjectRepository(Medico)
        private readonly medicoRepository: Repository<Medico>
    ){}

    async findOne(id:number): Promise<Medico>{
        const medico = await this.medicoRepository.findOne({where: {id}});
        if (!medico){
            throw new NotFoundException('Medico no encontrado')
        }

        return medico; 
    }
}