import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  starttest()
  { this.router.navigate(["display"]);


  }

}
