import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { OperadorService } from '../services/operador.service';

@Controller('operador')
export class OperadorController {
    constructor( private readonly operadorService:OperadorService ){}

    @Get()
    findAll(){
        return this.operadorService.findAll()
    }

    @Get(':id')
    get( @Param('id', ParseIntPipe) id:number ){
        return this.operadorService.findOne(id);
    };

    @Get(':id/pedidos') // el que no anda es g....
    getOreder( @Param('id', ParseIntPipe ) id:number ){
        return this.operadorService.getOrders(id);
    };



};
