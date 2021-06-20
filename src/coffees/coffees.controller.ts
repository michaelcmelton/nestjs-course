import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees.';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee.`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }
}
