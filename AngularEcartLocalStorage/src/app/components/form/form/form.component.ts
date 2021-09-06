import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  productform!: FormGroup;

  @Input() set dataPro(value: any) {
    if (value[0] !== undefined) {
      this.productform.setValue(value[0]);
    }
  }

  constructor(private formbuilder: FormBuilder, private productservice: ProductServiceService) { }

  ngOnInit(): void {
    this.CreateForm();

  }

  CreateForm() {
    this.productform = this.formbuilder.group({
      pname: [''],
      pdetails: ['', Validators.required],
      pimage: ['', Validators.required],
      pquanity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  Save() {
    //let action = false;
    if (this.productform.controls.pname.value === '' || this.productform.controls.pname.value == null) {
      this.productform.controls.pname.setValue(this.productservice.GenerateCode());
      // action = true;
    }
    const obj = {
      pname: this.productform.controls.pname.value,
      pdetails: this.productform.controls.pdetails.value,
      pimage: this.productform.controls.pimage.value,
      pquantity: this.productform.controls.pquanity.value,
      price: this.productform.controls.price.value
    };

    this.productform.reset();

    if (obj) {
      console.log("inside add action");
      console.log(obj);
      this.productservice.Add(obj);
    }

  }


  theimage() {
    //echo
  }


}















function Product(obj: { pname: any; pdetails: any; pimage: any; pquanity: any; price: any; }, Product: any) {
  throw new Error('Function not implemented.');
}

