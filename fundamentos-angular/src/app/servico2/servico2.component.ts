import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico2',
  templateUrl: './servico2.component.html',
  styleUrls: ['./servico2.component.css']
})
export class Servico2Component {
  descricao ="";
  constructor(public logger: LoggerService){}

  adicionaDescricao(){
    this.logger.logar(`A descricao ${this.descricao} foi adicionado`);
  }
}
