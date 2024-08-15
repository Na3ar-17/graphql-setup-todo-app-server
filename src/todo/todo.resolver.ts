import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => Todo)
  async findAll() {
    return await this.todoService.findAll();
  }

  @Mutation(() => Todo)
  async craete() {
    return await this.todoService.create();
  }

  @Mutation(() => Todo)
  async delete(@Args('id') id: string) {
    return await this.todoService.delete(id);
  }

  @Mutation(() => Todo)
  async update(@Args('UpdateTodoInput') updateTodoInput: UpdateTodoInput) {
    return await this.todoService.update(updateTodoInput);
  }
}
