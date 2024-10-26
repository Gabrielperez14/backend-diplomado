import { Medico } from 'src/medicos/medico.entity';
import { Paciente } from 'src/pacientes/paciente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cita')
export class Cita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp'})
    fecha_hora: Date;

    @Column({ type: 'text'})
    motivo: string;

    @ManyToOne(()=> Paciente, paciente =>paciente.cita)
    paciente: Paciente;

    @ManyToOne(()=>Medico, medico => medico.cita)
    medico: Medico;
}