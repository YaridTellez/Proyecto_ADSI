import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutsService } from 'src/app/Services/ProdutsApi/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  constructor(public productService:ProdutsService) { }

  ngOnInit(): void {
  }
  onSubmitProduct(formProduct:NgForm){
    this.productService.postProduct().subscribe(
      res =>{
        
      },
      err => {console.log(err);}
    );
  }
}
