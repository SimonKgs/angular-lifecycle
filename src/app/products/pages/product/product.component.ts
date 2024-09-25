import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

// los ciclos de vida que se van a usar se deben implementar
// si no se implementan no se cargan
export class ProductComponent implements 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked , 
  AfterViewInit, 
  AfterViewChecked 
{

  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  // se ejecutan en este orden
  // los check se ejecutan una segunda vez al final manteniendo el orden entre ellos
  // también se ejecutan si hay un cambio en una propiedad como en isProductVisible
  constructor() {
    console.log('Constructior');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }

  // se ejecuta cuando se crea crea en el document un componente hijo
  // si tiene un campo [input] como [price] en el ejemplo, esto pasa antes del onInit en el hijo
  // si el componente hijo está en pantalla y se modifica el valor del [input] tambien se ejecuta, pero no el on init del hijo
  // por ejemplo al incrementar el precio
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');
  }

  increasePrice() {
    this.currentPrice++;
  }
  
}
