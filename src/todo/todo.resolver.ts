import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
}
