import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  productModel: ProductModel;
  updateForm: FormGroup;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private toastrService:ToastrService
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
      inventoryQuantity: [0, Validators.required],
      id: [0, Validators.required],
      codeGuid:[""]
    });
  }
  getById() {
    let guid:string="";
    this.activatedRoute.params.subscribe((params)=>{
      guid=params["value"]
    })
    this.productService.getById(guid).subscribe((res)=>{
      this.productModel=res.data;
      this.updateForm.controls["name"].setValue(res.data.name)
      this.updateForm.controls["imageUrl"].setValue(res.data.imageUrl)
      this.updateForm.controls["price"].setValue(res.data.price)
      this.updateForm.controls["inventoryQuantity"].setValue(res.data.inventoryQuantity)
      this.updateForm.controls["id"].setValue(res.data.id)
      this.updateForm.controls["codeGuid"].setValue(res.data.codeGuid)
    })
  }
  delete() {
    this.productService.delete(this.updateForm.value).subscribe((res) => {
      this.route.navigate(['/']);
      this.toastrService.info(res.message);
    });
  }
}
