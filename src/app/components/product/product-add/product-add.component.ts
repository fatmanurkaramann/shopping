import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addForm:FormGroup

  constructor(private productService:ProductService,private formBuilder:FormBuilder,private route:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddForm();
    this.add()
  }

  createAddForm(){
    this.addForm=this.formBuilder.group({
      'name':["",[Validators.required,Validators.minLength(3)]],
      'imageUrl':["",Validators.required],
      'price':[0,Validators.required],
      'stock':[0,Validators.required],
      "codeGuid":[""]
    })
  }
  add(){
    let productModel=new ProductModel()
    if(this.addForm.valid){
      let model:ProductModel=this.addForm.value;
      this.productService.add(model).subscribe((res)=>{
        this.route.navigate(["/"])
        this.toastrService.success(productModel.name+ res.message)
      })
    }else{
      this.toastrService.show("Zorunlu alanları doldurunuz.")
    }
  }

}
