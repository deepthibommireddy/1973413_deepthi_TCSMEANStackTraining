import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './tasks-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }
  storeTasks(emp:any){
    this.http.post("http://localhost:3000/taskss",emp).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  loadTasks():Observable<Task[]>{
    return this.http.get<Task[]>("http://localhost:3000/taskss");
  }


    
  
}
