import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ProductsI } from 'src/app/Models/Products.interface';
import { TrademarkI } from 'src/app/Models/Trademark.interface';
import { ApiService } from 'src/app/Services/Api/api.service';
import { NewEditProductComponent } from '../newEditProduct/newEditProduct.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


   products:ProductsI[] ;
   trademarks:TrademarkI[] ;
   dialogRef: MatDialogRef<NewEditProductComponent>;
  constructor(
    public api:ApiService, 
    private router:Router,
    public dialog: MatDialog
    ) { }


  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res =>{    
      this.products = res;  
      console.log(res)   
      console.log(res[0].imageProduct)      
    })
    this.api.getAllTrademarks().subscribe(res =>{   
      this.trademarks = res;  
      console.log(res)      
    })
    this.api.getAllTrademark();
    console.log()
  }
  newProduct(){
    this.router.navigate(['NewEditProduct']);
    console.log('NewEditProduct')
  }

  editProduct(idProduct){
    this.dialog.open(NewEditProductComponent,{
      data: idProduct
    }).afterClosed().subscribe(item => {
      this.ngOnInit();
    })
    //this.dialogRef = this.dialog.open(NewEditProductComponent, idProduct);
    //this.router.navigate(['NewEditProduct', idProduct]);
    // dialogRef.afterClosed().subscribe(result =>{
    //   console.log('Dialog result: ${result}');
    // });
    console.log('NewEditProduct',this.dialogRef)
  }

  openDialog(){
     let dialogRef = this.dialog.open(NewEditProductComponent);

     dialogRef.afterClosed().subscribe(result =>{
       console.log('Dialog result: ${result}');
     });
  }
}
