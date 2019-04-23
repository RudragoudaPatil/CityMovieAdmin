import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService,private router:Router) { }
customer={id:'',name:'',email:'',password:'',address:'',phone:''};
  ngOnInit() {

  }
  addRegistration(customer){
  	this.registrationService.addRemoteCustomer(customer).subscribe(()=>{
      this.router.navigate(['/movie']);
    });
  }
}
