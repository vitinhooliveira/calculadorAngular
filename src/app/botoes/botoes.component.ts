import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css'],
})
export class BotoesComponent implements OnInit {
  valorInicial: number = 0;

  primeiroValor: boolean = true;

  valorInput: any = this.valorInicial;

  segundoValor: any = this.valorInicial;

  valorInput1: any = '';

  valorOp: any = '';

  resultOp: any = ''

  adicionar(e: any) {
    let valorButton: any = e.target.outerText;
    if (this.primeiroValor == true) {
      if (this.valorInput === 0) {
        this.valorInput = valorButton;
      } else {
        this.valorInput = this.valorInput + valorButton;
      }
    } else {
      if (this.segundoValor === 0) {
        this.segundoValor = valorButton;
      } else {
        this.segundoValor = this.segundoValor + valorButton;
      }
    }
  }

  operacao(e: any) {
    let valorOperacao: any = e.target.outerText;
    const valorInput1: any = this.valorInput;
    this.primeiroValor = false;
    this.valorInput1 = valorInput1;
    this.valorOp = valorOperacao;
  }

  operacao2() {
    const valorInput2: number = parseInt(this.segundoValor);
    const valorInput1: number = parseInt(this.valorInput1);
    const op: any = this.valorOp;

    if (op == '+') {
      const num: any = valorInput1 + valorInput2
      this.resultOp =  num
      
    } if (op == '-') {
      const num: any = valorInput1 - valorInput2
      this.resultOp =  num
      
    } if (op == '*') {
      const num: any = valorInput1 * valorInput2
      this.resultOp =  num
      
    } if (op == '/') {
      const num: any = valorInput1 / valorInput2
      this.resultOp =  num
      
    }
  }

  operacaoAc(){
    this.primeiroValor = true
    this.valorInput = 0
    this.segundoValor = 0
  }
  constructor() {}

  ngOnInit(): void {}
}
function e(e: any): any {
  throw new Error('Function not implemented.');
}
