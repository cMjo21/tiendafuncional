import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

;
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [

{path:'home',
component:HomeComponent
},

{path:'carrito',
component: CarritoComponent
},

{path:'producto',
component: ProductosComponent
},

{path:'registro',
component: RegistroComponent
},

{path:'**',
component:HomeComponent
}

];
