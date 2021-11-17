import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  //template: '<h1>Meu-primeiro componente'
  template: `
    <h1>Meu-primeiro componente</h1>
    <hr/>`,
  styles: ['.h1 {color: red}'],
})
export class MeuPrimeiroComponent {}