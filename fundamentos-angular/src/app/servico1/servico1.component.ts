import { Component, } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component  {
nome ="";
constructor(private logger: LoggerService){}
adicionaNome(){
  this.logger.logar(`O nome ${this.nome} foi adicionado`)
}
}
