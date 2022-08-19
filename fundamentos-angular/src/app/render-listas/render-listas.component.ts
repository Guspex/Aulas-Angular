import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-render-listas',
  templateUrl: './render-listas.component.html',
  styleUrls: ['./render-listas.component.css']
})
export class RenderListasComponent {

celulares: Celular[] = [
  {
    id: 1,
    nome: "Poco",
    descricao: "Xiaomi",
    esgotado: false
  },
  {
    id: 2,
    nome: "Redmi",
    descricao: "Xiaomi 2",
    esgotado: false
  },
  {
    id: 3,
    nome: "Poco X3",
    descricao: "Xiaomi 3",
    esgotado: true
  }
]

}
