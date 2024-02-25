import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosComponent } from '../productos/productos.component';
import { ProducServices } from '../../api/ProductServices.service';
import { CarritoServices } from '../../api/CarritoServices.service';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/menu/menu.component'

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: './carrito.component.html',
  imports: [CarritoComponent ,ProductosComponent, MenuComponent,CommonModule],
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  products: any[] = [];
  totalCompra: number = 0;
  productosSeleccionados: any[] = [];

  constructor(private productService: ProducServices, public carritoService: CarritoServices) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  agregarAlCarrito(producto: any, event: any) {
    const cantidad = event.target.checked ? 1 : 0;
    this.carritoService.agregarAlCarrito(producto, cantidad);
    this.actualizarTotalCompra();
  }

  quitarDelCarrito(producto: any) {
    // Quitar el producto del carrito
    const index = this.products.indexOf(producto);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.actualizarTotalCompra();
    }
  }

  actualizarTotalCompra() {
    this.totalCompra = this.carritoService.getTotalCompra();
  }


  updateCantidad(event:any, index: number) {

    const nuevaCantidad = event.target.value;
  if (!isNaN(nuevaCantidad)) {
    const cantidadNumerica = Number(nuevaCantidad);
    this.products[index].cantidad = cantidadNumerica;
    // Calcular el total del producto actualizado
    const precio = this.products[index].price;
    const totalProducto = precio * cantidadNumerica;
    // Actualizar el total de la compra
    this.totalCompra += totalProducto;
  }
      
  }

  comprar() {
    alert('Compra realizada');
    // Aquí puedes enviar la orden de compra con this.carrito al servidor o realizar alguna acción adicional
  }
 
  
  reiniciarCompra() {
    this.products.forEach(producto => {
      producto.cantidad = 0;
    });
    this.totalCompra = 0;
  }




}


