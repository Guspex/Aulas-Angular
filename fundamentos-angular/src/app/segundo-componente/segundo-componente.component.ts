import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Joao";
  dataNasc ="1995-05-30";
  urlImagem = "/assets/eu.jpg";
  mostrarDataNascimento(){
    alert(`A data de nascimento: ${this.dataNasc}`)
  }
}
