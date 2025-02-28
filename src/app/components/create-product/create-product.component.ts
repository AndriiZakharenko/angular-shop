import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';

@Component({
  selector: 'app-create-product',
  imports: [CommonModule, ReactiveFormsModule, FocusDirective],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
[x: string]: any;
  constructor() {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log('Product Created:', this.form.value);
    }
  }
}
