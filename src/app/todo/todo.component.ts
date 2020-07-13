import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
//import { filter } from 'src/app';

//import { TODOS } from '../todo-list';
  //not using array from separate file anymore, too hard to keep track

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  //providers: [filter]
})

export class TodoComponent implements OnInit {
  
  //todos = TODOS; 
  //Angular tutorial used separate file to store array, but it's just overcomplicating things for me.
  
  todos: Todo[] = [
    {task: 'Make bed', completed: true},
    {task: 'Take meds', completed: true},
    {task: 'Shower', completed: false},
    {task: 'Wash face', completed: false},
    {task: 'Brush teeth', completed: false}
];
  
  todoFilter: string = '';

  selectedTodo: Todo;

  markComplete(item) {
    item.completed = true;
  }

  addTask(newTodoTask) {
    let newTodo = {
      task: newTodoTask,
      completed: false
    };
    this.todos.push(newTodo);
  }

  removeTodo(todo) {
    this.todos = this.todos.filter( t => t.task !== todo.task);
  }
  
  constructor() { }
  //constructor(private filterPipe : filter) { }

  ngOnInit() {
  }

}
