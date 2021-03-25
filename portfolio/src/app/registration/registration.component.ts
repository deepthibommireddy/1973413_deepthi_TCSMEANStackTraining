import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
fn:string=""
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  saveData(userRef:any){
  alert("Registration Successful")
    console.log(userRef)
    sessionStorage.setItem("regDetails",JSON.stringify(userRef))
    sessionStorage.setItem("token",JSON.stringify("123"))
    this.router.navigate(["login"]);
  }

}
