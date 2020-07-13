import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
//imports service stuff so I can use it
//import { TodoDataService } from './todo-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-Do List';

  //tried using a service before realizing it was not necessary for the build requirements.
  //constructor(private todoDataService: TodoDataService) {}

  todos: Todo[] = [
    {task: 'Make bed', completed: true},
    {task: 'Take meds', completed: true},
    {task: 'Shower', completed: false},
    {task: 'Wash face', completed: false},
    {task: 'Brush teeth', completed: false}
]; 
  
}
