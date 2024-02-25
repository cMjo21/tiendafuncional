import { Component, OnInit} from '@angular/core';
import { ProducServices } from '../../api/ProductServices.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products: any[] = [];

  constructor(private productService: ProducServices) {} // Inyecta el servicio

  ngOnInit(): void {
    // Llamar al método para obtener los productos al inicializar el componente
    this.getProducts();
  }

  getProducts(): void {
    // Llamar al servicio para obtener los productos
    this.productService.getAllProduct().subscribe(products => {
      // Asignar los productos obtenidos al arreglo de productos del componente
      this.products = products;
    });
  }

  uniqueCategoryProducts(): any[] {
    const uniqueProducts = [];
    const categoriesAdded = new Set();

    // Itera sobre los productos
    for (const product of this.products) {
      // Verifica si ya se ha agregado un producto de esta categoría
      if (!categoriesAdded.has(product.category)) {
        // Si no se ha agregado, agrega el producto a la lista de productos únicos
        uniqueProducts.push(product);
        // Agrega la categoría a Set para marcarla como agregada
        categoriesAdded.add(product.category);
      }
    }

    return uniqueProducts;
  }
}
 









