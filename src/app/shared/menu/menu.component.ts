import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout'
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

menuItems: Array<{path:string, label: string}> = [
 {
  path: '/home',
  label: 'Home'
 },

 {
  path: '/producto',
  label: 'Producto'
 },

 {
  path: '/registro',
  label: 'Registro'
 },

 {
  path: '/carrito',
  label: 'Comprar'
 },

]

trackByFn(index: number, item: any): string {
  return item.path;

}


}
