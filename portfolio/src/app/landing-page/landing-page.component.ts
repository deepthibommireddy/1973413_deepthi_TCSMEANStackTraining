import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  tableinfo:Array<any>=new Array();
  tablei:Array<any>=new Array();
  msg:string=""
  flag:boolean=false
  
  
  loginRef=new FormGroup({
    contact:new FormControl(),
    phone:new FormControl()
  });
  constructor(public router:Router) { }

  ngOnInit(): void {
    
    var sess=JSON.parse(sessionStorage.getItem("regDetails")!);
    console.log("vvvv"+sess.uname)
    this.msg=sess.uname
  }
  
  updateInfo() {
    
    console.log(this.loginRef.value);   // all value 
    
    this.tableinfo.push(this.loginRef.value)
    console.log(this.tablei)
    this.flag=true;

    
  }
  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

}
