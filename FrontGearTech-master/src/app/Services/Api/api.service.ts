import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../../Models/Login.interface';
import { ResponseI } from 'src/app/Models/Response.interface';
import { ProductsI } from 'src/app/Models/Products.interface';
import { TrademarkI } from 'src/app/Models/Trademark.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string = "https://localhost:44346/api/"
  list :TrademarkI[];

  constructor(private http:HttpClient) { }

   LoginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "Auth";    
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllProducts():Observable<ProductsI[]>{
    let direccion = this.url + "Products";
    return this.http.get<ProductsI[]>(direccion);
  }
  getSingleProduct(idProduct):Observable<ProductsI>{
    let direccion = this.url + "Products/" + idProduct;
    return this.http.get<ProductsI>(direccion); 
  }

  putProduct(form:ProductsI):Observable<ResponseI>{
    let direccion = this.url + "Products/" + form.idProduct;
    return this.http.put<ResponseI>(direccion,form); 
   
  }


  getAllTrademarks():Observable<TrademarkI[]>{
    let direccion = this.url + "Trademark";
    return this.http.get<TrademarkI[]>(direccion);
  }
  getAllTrademark(){
    this.http.get(this.url + "Trademark")
    .toPromise()
    .then(res => this.list = res as TrademarkI[]);
  }
}
