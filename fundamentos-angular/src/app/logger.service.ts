import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = [];
  logar(mensagem: string){
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }
  exibeLogs(){
    console.log(this.mensagens);
  }
}
