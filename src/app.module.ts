import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CitasModule } from './citas/citas.module';
import { MedicoModule } from './medicos/medico.module';
import { PacienteModule } from './pacientes/pacientes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sopas.2001',
      database: 'prueba', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }), AuthModule,
    UsersModule,
    CitasModule,
    MedicoModule,
    PacienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
