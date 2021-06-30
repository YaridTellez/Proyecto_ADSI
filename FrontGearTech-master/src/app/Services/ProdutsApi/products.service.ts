import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsModel } from 'src/app/Services/ProdutsApi/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {
  
  constructor(private http: HttpClient) { }

  
  readonly baseURL = "https://localhost:44346/api/Products"
  formDataProducts : ProductsModel = new ProductsModel();

  //postProduct(){
  //   const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  //   return this.http.post(this.baseURL,this.formDataProducts,{headers : reqHeader});
  // }
  postProduct(){
    return this.http.post(this.baseURL,this.formDataProducts);
  }
}
