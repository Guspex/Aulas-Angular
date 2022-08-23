import { Injectable } from '@angular/core';
import { produtos } from './produtos';
import { IProduto } from "./IProduto";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  constructor() { }
  getAll(){
    return this.produtos;
  }
  getOne(produtoId: Number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
