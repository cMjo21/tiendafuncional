import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { ProducServices } from '../../api/ProductServices.service';
import { MenuComponent } from '../../shared/menu/menu.component';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,MenuComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

readonly productSvs = inject(ProducServices);

products$ = this.productSvs.getAllProduct();


  toggleDescription(product: { showDescription: boolean; }): void {
  product.showDescription = !product.showDescription;

}
}


