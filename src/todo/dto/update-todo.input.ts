import { Field, InputType, Int, PartialType, PickType } from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';

@InputType()
export class UpdateTodoInput extends PartialType(
  PickType(Todo, ['title', 'isCompleted']),
) {
  @Field(() => String)
  id: string;
}
