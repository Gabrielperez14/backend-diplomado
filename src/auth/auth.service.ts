import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { UsersServices } from "src/users/users.service";
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{

    constructor(
        private readonly usersServices: UsersServices,
        private readonly jwtService: JwtService 
    ){}

    async register({email,medico, paciente, role, password}: RegisterDto ){
        const user = await this.usersServices.findOneByEmail(email)
        if (user){
            throw new BadRequestException('El correo ya se encuentra registrado')
        }
        
        return await this.usersServices.create({
            email,
            medico,
            paciente,
            role,
            password: await bcrypt.hash(password, 10)
        })

        // return {
        //     name,
        //     email,
        // }
    }

    async login({email, password}: LoginDto){
         const user = await this.usersServices.findOneByEmail(email)
        if(!user){
            throw new BadRequestException('Credenciales invalidas')
        }

        const isPasswordIsValid = await bcrypt.compare(password, user.password)
        if(!isPasswordIsValid){
            throw new UnauthorizedException('credenciales invalida')
        }

        const payload = {email: user.email};

        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            email
        };
    }
}