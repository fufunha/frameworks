import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databese";


@Injectable()
 export class FindAllTodosRepository {
 constructor(private readonly prisma: PrismaService) {}

 async findAll () {
    return await this.prisma.todo.findMany();
 }
 }