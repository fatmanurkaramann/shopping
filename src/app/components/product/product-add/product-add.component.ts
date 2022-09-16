import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // @ViewChild ("inputName") name:ElementRef
  // @ViewChild ("inputQuantity") quantity:ElementRef
  // @ViewChild ("inputUnitPrice") price:ElementRef
  // @ViewChild ("inputImage") image:ElementRef

  addForm:FormGroup

  constructor(private productService:ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.addForm=this.formBuilder.group({
      'name':["",[Validators.required,Validators.minLength(3)]],
      'imageUrl':["",Validators.required],
      'price':[0,Validators.required],
      'stock':[0,Validators.required]
    })
  }
  add(){
    // if(this.addForm.valid){
    //  this.productService.add(this.addForm.value)
    // }

  }

}
