import { CommandHandler, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "src/domain/models/user";


export class UpdateUserCommand implements ICommand {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;
}

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    constructor() { }
    async execute(command: UpdateUserCommand): Promise<User> {
        return <User>{
            userId: '1010101',
            name: 'Test User',
            email: 'user@gmail.com'
        }
    }
}