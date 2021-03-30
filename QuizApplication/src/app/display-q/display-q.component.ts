import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Choice } from '../Choice';
import { QAC } from '../disp';
import { DispserviceService } from '../dispservice.service';

@Component({
  selector: 'app-display-q',
  templateUrl: './display-q.component.html',
  styleUrls: ['./display-q.component.css']
})
export class DisplayQComponent implements OnInit {
  questions:Array<QAC>=[]
  rightquestions:Array<any>=[]
  isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number=0;
  flag:boolean=false;
  flag1:boolean=false
  msg:boolean=true
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

  
  
  regform=new FormGroup({
    1:new FormControl(),
    2:new FormControl(),
    
    
  });
  
  constructor(public emp:DispserviceService,public router:Router) { }

  ngOnInit(): void {
    this.emp.loadQuestionsData().subscribe(result=>this.questions=result)
    
    console.log (this.questions)
   
  }
 
  submitTest() {

    console.log(this.questions)
		 this.rightAnswer = 0;
		 this.totalAnswered = 0;
		 for (let i = 0; i < this.questions.length; i++) {
		 	if ("selected" in this.questions[i] && (this.questions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.questions[i]["selected"] == this.questions[i]["answer"]) {
					this.rightAnswer++;
          this.rightquestions.push(this.questions[i])
		 		}
			}
      

		 }
     console.log("correct   :"+this.rightquestions)
      console.log("total  :"+this.totalAnswered)
      sessionStorage.setItem("correct",JSON.stringify(this.rightAnswer))
      sessionStorage.setItem("total",JSON.stringify(this.totalAnswered))
      
      
      this.flag=true;
      if(this.rightAnswer<5)
      this.msg=false


	}
  viewans()
  {
    this.flag1=true
  }

}
