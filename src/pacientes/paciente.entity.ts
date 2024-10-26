import { Cita } from 'src/citas/cita.entity';
import { HistoriaMedica } from 'src/historias-medicas/historia-medica.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ type: 'timestamp'})
    fechaDeNacimiento: Date;

    @OneToOne(()=> User, user => user.paciente)
    user: User;

    @OneToMany(()=>HistoriaMedica, historiaMedica => historiaMedica.paciente)
    historiaMedica: HistoriaMedica[];

    @OneToMany(()=> Cita, cita => cita.paciente)
    cita: Cita[];
}