import { Controller, Get } from '@nestjs/common';
import {Gato} from 'src/gato/gato.interface';

@Controller('gatos')
export class GatosController {


 private readonly gatos: Gato[] = [];

 @Get()
 findAll(): Gato[]{
    return this.gatos;

 }


}