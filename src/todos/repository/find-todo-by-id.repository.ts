import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.databese";


@Injectable()
 export class FindTodoByRepository {
 constructor(private readonly prisma: PrismaService) {}

 async execute(id: string) {
    return await this.prisma.todo.findUnique({
    where: {id}
 });
 }
 }