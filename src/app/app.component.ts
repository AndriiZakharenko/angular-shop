import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/products';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HttpClientModule,
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe
  ],
  providers: [ProductsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular shop';
  products$: Observable<IProduct[]> | undefined;
  loading = false;
  term: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
