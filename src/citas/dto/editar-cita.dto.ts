import { IsDateString, IsOptional, IsString } from "class-validator";


export class UpdateCitaDto{
    @IsDateString()
    @IsOptional()
    fecha_hora?: Date;

    @IsString()
    @IsOptional()
    motivo?: string;

    
}