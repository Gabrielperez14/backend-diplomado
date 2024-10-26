import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersServices } from './users.service';
import { CreateUserDto } from './create-users.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServices) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
}