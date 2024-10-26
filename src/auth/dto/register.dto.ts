import { IsEmail, IsString, MinLength } from 'class-validator'
import { Medico } from 'src/medicos/medico.entity';
import { Paciente } from 'src/pacientes/paciente.entity';
import { UserRole } from 'src/users/user-role.enum';
export class RegisterDto{
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;

  
    role: UserRole;

    medico?: Medico;

    paciente?: Paciente;

}