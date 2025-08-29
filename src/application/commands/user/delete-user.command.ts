import { CommandHandler, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { IsNotEmpty } from "class-validator";
import { User } from "src/domain/models/user";

export class DeleteUserCommand implements ICommand {
    @IsNotEmpty()
    key: string;
}

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
    constructor() { }
    async execute(command: DeleteUserCommand): Promise<User> {
        return <User>{
            userId: '1010101',
            name: 'Test User',
            email: 'user@gmail.com'
        }
    }
}