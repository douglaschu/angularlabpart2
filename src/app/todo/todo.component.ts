import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TODOS } from '../todo-list';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  
  todos = TODOS;
  selectedTodo: Todo;

  private isButtonVisible = true;  
  
  constructor() { }

  ngOnInit(): {
  }

}
