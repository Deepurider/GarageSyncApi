import { CommandHandler, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "src/domain/models/user";

export class CreateUserCommand implements ICommand {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;
}

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    constructor() { }
    async execute(command: CreateUserCommand): Promise<User> {
        const user: User = {
            userId: '01010101',
            name: command.name,
            email: command.email
        };
        return user
    }
}