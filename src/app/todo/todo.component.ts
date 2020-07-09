import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TODO } from '../todo-list';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = TODO;
  selectedTodo: Todo;

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
  
  constructor() { }

  ngOnInit(): {
  }

}
