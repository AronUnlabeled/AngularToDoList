import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ToDo } from '../to-do';


@Component({
  selector: 'app-to-do-c',
  templateUrl: './to-do-c.component.html',
  styleUrls: ['./to-do-c.component.css']
})
export class ToDoCComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  tasks:ToDo[]=[
    {task:"laundry" , completed:false},
    {task:"mow" , completed:false},
    {task:"sweep" , completed:true},
    {task:"wash car" , completed:true},
    {task:"sweep" , completed:false}
  ]


  CrossOff(selection:number):void{
    this.tasks[selection].completed=true;
  }

  AddTask(form:NgForm):void{
    let MyT = form.form.value.taskName;
    let NewTask:ToDo={task:MyT,completed:false};
    this.tasks.push(NewTask);
  }


}
