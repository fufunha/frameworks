import { Injectable,Logger,NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository/delete-todo.repository";
import { FindTodoByRepository } from "../repository";

@Injectable()
export class DeleteTodoUsecase {
    constructor(private readonly todoRepository: DeleteTodoRepository, private readonly findTodoById: FindTodoByRepository,private readonly Logger:Logger){}
    


async execute(id: string) {
    try{
        this.Logger.log('deleting toDo...');

        const todo = await this.findTodoById.execute(id);
        
        if (!todo) {
            throw new NotFoundException("toDo não encontrado");
        }

        await this.todoRepository.execute(id);
        this.Logger.log('ToDo deleted sucessfully');
        return todo;
    }catch (error){
        this.Logger.error(error);
        throw error ;
        }   
    }
}
