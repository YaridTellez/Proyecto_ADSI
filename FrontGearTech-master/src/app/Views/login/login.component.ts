import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/Models/Login.interface';
import { ResponseI } from 'src/app/Models/Response.interface';
import { ApiService } from 'src/app/Services/Api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    UserName : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required)
  })
  constructor(private api:ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMsj: string = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  //validar si el token existe
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['Dashboard']);
    }
  }
//ligin y arecibir tokem
  onLogin(form: LoginI){
     this.api.LoginByEmail(form).subscribe(data =>{
       console.log(data)
       let dataResponse:ResponseI = data;       
       if(dataResponse.status == "Ok"){
        console.log(dataResponse.error)
         localStorage.setItem("token",data.token);
         this.router.navigate(['Dashboard']);
       }else{
         this.errorStatus = true;
         this.errorMsj=dataResponse.response;
       }
       })
  }

}
