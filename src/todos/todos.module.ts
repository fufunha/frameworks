import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from 'src/shared/prisma.database';
import * as UseCases from './use-cases';
import * as Repositories from '.repository'

const UseCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  controllers: [TodosController],
  providers: [TodosService
    PrismaService
    Logger
    ...repositories,
    ...UseCases,
  ],
})
export class TodosModule {}
