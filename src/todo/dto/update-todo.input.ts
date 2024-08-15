import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => String)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  isCompleted?: boolean;
}
