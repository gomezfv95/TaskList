import "./styles.css";
import { TodoList, Todo } from "./class";
import { crearTodoHTML } from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHTML);


// const newTodo = new Todo("Aprender a cerrar el orto");
// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos);