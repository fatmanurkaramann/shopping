import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  updateForm: FormGroup;
  productModel: ProductModel;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.crateUpdateForm();
    this.getById();
  }
  crateUpdateForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', Validators.required],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      id: [0, Validators.required],
    });
  }
  getById() {
    // let id: number = 0;
    // this.activatedRoute.params.subscribe((params) => {
    //   id = params['id'];
    // });
    // this.productService.getById(id).subscribe(
    //   (res) => {
    //     this.productModel = res;
    //     this.updateForm.controls['id'].setValue(res.id);
    //     this.updateForm.controls['name'].setValue(res.name);
    //     this.updateForm.controls['stock'].setValue(res.stock);
    //     this.updateForm.controls['price'].setValue(res.price);
    //     this.updateForm.controls['imageUrl'].setValue(res.imageUrl);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  update() {
    // if (this.updateForm.valid) {
    //   this.productService.update(this.updateForm.value);
    //   this.route.navigate(['/']);
    // }else{
    //   alert("güncelleme başarısız")
    // }
  }
}
