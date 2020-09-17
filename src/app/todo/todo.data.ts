import {InMemoryDbService} from "angular-in-memory-web-api";
import {Todo} from "./todo.model";

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [{
      id: "f823b191-7799-438d-8d78-fcb1e468fc78",
      desc: "Getting up",
      completed: true
    },
      {
        id: "c1234567-8866-522c-9f78-hfea14f8hc12",
        desc: "Go to school",
        completed: false
      }
    ]
    return {todos};
  }
}
