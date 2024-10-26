import { IsDateString, IsNotEmpty, IsString } from "class-validator";


export class CreateCitaDto{
    @IsDateString()
    @IsNotEmpty()
    fecha_hora: Date; 

    @IsString()
    @IsNotEmpty()
    motivo: string;

    @IsNotEmpty()
    medicoId: number;

    @IsNotEmpty()
    pacienteId: number;
}