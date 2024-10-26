import { Medico } from 'src/medicos/medico.entity';
import { Paciente } from 'src/pacientes/paciente.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
 export class HistoriaMedica {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    contenido: string;

   @Column('date')
   fecha_hora: Date;

    @ManyToOne(()=> Medico, medico =>medico.historiaMedica)
    medico: Medico;

   @ManyToOne(()=>Paciente, paciente => paciente.historiaMedica)
     paciente: Paciente;
}