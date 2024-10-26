import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { CreateCitaDto } from './dto/crear-cita.dto';
import { UpdateCitaDto } from './dto/editar-cita.dto';
import { CitasServices } from './citas.service';


@Controller('citas')
export class CitasController {
  constructor(private readonly citasServices: CitasServices) {}

  @Post('cita')
  create(@Body() createCitaDto: CreateCitaDto){
    console.log(createCitaDto)
    return this.citasServices.create(createCitaDto);
  }

  @Get()
  findAll(){
    return this.citasServices.findAll();
  }

  @Delete(':id')
  remove(@Param('id')id: number){
    return this.citasServices.remove(id)
  }



@Put(':id')
   update(@Param('id') id:number, @Body() updateCitaDto: UpdateCitaDto){
   return this.citasServices.update(id, updateCitaDto)
  }

  @Get(':id')
  findOne(@Param('id') id:number){
    return this.citasServices.findOneCita(id)
  }

}