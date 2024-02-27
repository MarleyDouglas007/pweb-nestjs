import { Controller, Get } from '@nestjs/common';
import {Gatos} from 'src/gatos/de/gatos.interface';

@Controller('gatos')
export class GatosController {


 private readonly gatos: Gatos[] = [];

 @Get()
 findAll(): Gatos[]{
    return this.gatos;

 }


}