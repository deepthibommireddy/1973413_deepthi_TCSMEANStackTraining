import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:string=" "
uname:string=""


  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(loginRef:any){
    
    var sess=JSON.parse(sessionStorage.getItem("regDetails")!);
    console.log("session Details"+sess)
    
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;
    console.log("ms"+this.msg)
    if(user1 ==sess.uname  && pass1 == sess.pwd){
      this.msg="Successfully LOgin"
      this.router.navigate(["landingpage"]);
    }else {
      this.msg = "Failure try once again";
    }

  }

}
