import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { UserRole } from './user-role.enum'
import { Paciente } from 'src/pacientes/paciente.entity'
import { Medico } from 'src/medicos/medico.entity'
import { CreateUserDto } from './create-users.dto'
@Injectable()
export class UsersServices{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ){}


    create(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto);
      }

    findOneByEmail(email: string) {
        return this.usersRepository.findOneBy({ email });
      }
}