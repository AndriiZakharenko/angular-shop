import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../../components/product/product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';

@Component({
  selector: 'app-product-page',
  imports: [
    CommonModule,
    FormsModule,
    ProductComponent,
    ModalComponent,
    CreateProductComponent,
    FilterProductsPipe,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  title = 'angular shop';
  // products$: Observable<IProduct[]> | undefined;
  loading = false;
  term: string = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
