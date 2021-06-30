import { HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsI } from 'src/app/Models/Products.interface';
import { ApiService } from 'src/app/Services/Api/api.service';

@Component({
  selector: 'app-newEditProduct',
  templateUrl: './newEditProduct.component.html',
  styleUrls: ['./newEditProduct.component.css']
})
export class NewEditProductComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();
  dataItem:any;
  dataProduct:ProductsI;
  editForm = new FormGroup({
    idProduct: new FormControl(''),
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productStock: new FormControl(''),
    imageProduct: new FormControl(''),
    idCategory: new FormControl('')
    //token: new FormControl('')
    
  });
  constructor(
    private activeRouter:ActivatedRoute, 
    private router:Router, 
    private api:ApiService,
    public dialogRef: MatDialogRef<NewEditProductComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ProductsI,
    ) {
      this.dataItem = this.data;
     }
  

  ngOnInit(): void {
    let productId = this.activeRouter.snapshot.paramMap.get('idProduct');
    let token = this.getToken();
    this.api.getSingleProduct(this.dataItem).subscribe(data =>{
        this.dataProduct = data;
        console.log("this.dataProduct",this.dataProduct)
        this.editForm.setValue({
          'productName' : this.dataProduct.productName,
          'idProduct'   : this.dataProduct.idCategory,
          'productPrice': this.dataProduct.productPrice,
          'productStock': this.dataProduct.productStock,
          'imageProduct': this.dataProduct.imageProduct,
          'idCategory'  : this.dataProduct.idCategory
          //'token' : this.dataProduct.token
        });
    })
  }
//ZP9Lw$fGyUD- Cla@ro- cla@ro - !T3lgu@ -c1@r0 
  getToken(){
    return localStorage.getItem('token');
  }
  editProduct(form:ProductsI){  
    form.idProduct = this.dataItem 
    this.api.putProduct(form).subscribe(data => {
      console.log("putProduts",data);
    })
  }
  addProduct(form:ProductsI){
    console.log("addForm",form);
  }
  saveProduct(form:ProductsI){
   // this.submitClicked.emit(datas)
  this.dialogRef.close(this.dataItem);
  console.log("dataItem",this.dataItem)
  }
  cancel() {
    this.dialogRef.close();
  }
}
