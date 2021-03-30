import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../task.service';
import { Task } from '../tasks-model';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.css']
})
export class TodotaskComponent implements OnInit {
  
  taskArr:Array<Task>=[]
  
  
  constructor(public empSer:TaskService) { }

  ngOnInit(): void {
  
    this.empSer.loadTasks().subscribe(result=>this.taskArr=result)
    console.log("arr"+this.taskArr)
  }
  storeTask(ref:any)
  {
    this.empSer.storeTasks(ref);
    console.log(ref)
  }
  displayedColumns: string[] = ['id', 'name', 'taskarea', 'deadline'];

}
