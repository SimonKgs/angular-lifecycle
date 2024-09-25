import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price:number = 0

  // dollar para Observables
  public interaval$?: Subscription;

  // para el ejemplo vamos a usar el interval, se ejecutara continuamente
  // si creamos y destruimos el componente se irán acumulando excepto que lo cancelemos
  // eso lo hacemos en el ondestroy para que en ese momento siempre cancele la subscripción
  ngOnInit(): void {
    console.log('Price Component: ngOnInit');

    this.interaval$ = interval(1000).subscribe( value => console.log(value))
     
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price Component: ngOnChanges');
    console.log({changes});
  }

  // cancelamos la subscripción, siempre al destruir el componente
  // evitamos que se quede ejecutando en segundo plano y también que se acumule en cada creación
  // si tenemos algún eventListener también es conveniente elimiarlo al destruir el componente
  ngOnDestroy(): void {
    console.log('Price Component: ngOnDestroy');

    this.interaval$?.unsubscribe();
  }

 

}
