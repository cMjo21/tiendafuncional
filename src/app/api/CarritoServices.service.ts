import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CarritoServices {
  private readonly _http: HttpClient;
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>([]);

  carrito$ = this.carritoSubject.asObservable();

  constructor(private http: HttpClient) {
    this._http = http;
  }

  getAllProduct(): Observable<any> {
    return this._http.get('https://fakestoreapi.com/products');
  }

  agregarAlCarrito(producto: any, cantidad: number) {
    // Agregar el producto al carrito con la cantidad especificada
    for (let i = 0; i < cantidad; i++) {
      this.carrito.push(producto);
    }
    this.carritoSubject.next(this.carrito);
  }

  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }

  getTotalCompra() {
    // Calcular el total sumando el precio de cada producto multiplicado por su cantidad
    return this.carrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0);
  }
}
