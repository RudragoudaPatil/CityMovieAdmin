import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customers=[];
  customer:any={};
  constructor(private router:Router,private registerService:RegistrationService) { }

  ngOnInit() {
    this.registerService.getCustomerByEmail().subscribe((result) => {this.customers = result;});
    console.log(this.customers);
  }

  onRegister(){
    this.router.navigate(['/registration'])
  }
  onLogin(){
    //alert((this.customer.name) (this.customer.password) );
    for(var i=0;i<this.customers.length;i++){
  if ((this.customer.name == this.customers[i].name) && (this.customer.password == this.customers[i].password)){
  this.router.navigate(['/movie']);
}
    }

  }

}
