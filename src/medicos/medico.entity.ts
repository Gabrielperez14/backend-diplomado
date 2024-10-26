import { Cita } from "src/citas/cita.entity";
import { HistoriaMedica } from "src/historias-medicas/historia-medica.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Medico{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    especializacion: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @OneToOne(()=> User, user => user.medico)
    user:User;

    @OneToMany(()=>HistoriaMedica, historiaMedica => historiaMedica.medico)
    historiaMedica: HistoriaMedica[];

    @OneToMany(()=> Cita, cita=>cita.medico)
    cita: Cita[];
}