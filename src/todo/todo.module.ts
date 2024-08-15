import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoResolver, TodoService, PrismaService],
})
export class TodoModule {}
