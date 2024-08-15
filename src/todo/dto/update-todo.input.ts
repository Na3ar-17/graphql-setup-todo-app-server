import {
  Field,
  InputType,
  Int,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';

@InputType()
export class UpdateTodoInput extends PartialType(
  OmitType(Todo, ['createdAt', 'updatedAt']),
) {
  @Field(() => String)
  id: string;
}
