import { lchown } from "fs";

export class CreateTodoDto {
    title:       String;
  decription:      String;
  completed  :    Boolean;
  priority:    TodoPriority; 
  dueAt:        Date;
  completedAt:  Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

enum TodoPriority {
    LOW = 'LOW',
    MEDIUM ='MEDIUM',
    HIGH ='HIGH'
}
