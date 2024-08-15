import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create() {
    const todos = await this.findAll();

    const newTodo = await this.prisma.todo.create({
      data: {
        isCompleted: false,
        title: todos.length < 1 ? 'Untitled' : `Untitled ${todos.length}`,
      },
    });

    return newTodo;
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new Error('Not found');
    }

    return todo;
  }

  async update(updateTodoInput: UpdateTodoInput) {
    const todo = await this.findOne(updateTodoInput.id);

    return await this.prisma.todo.update({
      where: {
        id: todo.id,
      },
      data: {
        title: updateTodoInput.title,
        isCompleted: updateTodoInput.isCompleted,
      },
    });
  }

  async remove(id: string) {
    const todo = await this.findOne(id);

    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
