import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import {UserRole} from './user-role.enum'
import { Medico } from 'src/medicos/medico.entity';
import { Paciente } from 'src/pacientes/paciente.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default:UserRole.PACIENTE
    })
    role: UserRole;

    @OneToOne(()=> Medico, medico => medico.user, {nullable: true})
    @JoinColumn()
    medico: Medico;

    @OneToOne(()=> Paciente, paciente => paciente.user,{nullable:true})
    @JoinColumn()
    paciente: Paciente;
}