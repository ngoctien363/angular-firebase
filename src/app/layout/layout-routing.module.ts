import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'productions', pathMatch: 'prefix' },
        {
            path: 'productions',
            component: ProductsComponent
        }
    ]
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
