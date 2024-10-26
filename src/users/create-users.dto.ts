import { Medico } from "src/medicos/medico.entity";
import { UserRole } from "./user-role.enum";
import { Paciente } from "src/pacientes/paciente.entity";

export class CreateUserDto {
    email: string;
    password: string;
    role: UserRole;
    medico?: Medico;
    paciente?: Paciente
  }