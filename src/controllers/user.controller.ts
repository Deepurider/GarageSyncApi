import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "src/application/commands/user/create-user.command";
import { DeleteUserCommand } from "src/application/commands/user/delete-user.command";
import { GetUserQuery } from "src/application/commands/user/get-user.query";
import { UpdateUserCommand } from "src/application/commands/user/update-user.command";

@Controller('User')
export class UserController {
    constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) { }
    @Get(':key')
    async get(@Param() query: GetUserQuery) {
        console.log('Get method called')
        return await this.queryBus.execute(query);
    }

    @Post()
    async create(@Body() command: CreateUserCommand) {
        console.log('Post method called')
        return await this.commandBus.execute(command);
    }

    @Put(':key')
    async update(@Param() id: number, @Body() command: UpdateUserCommand) {
        console.log('Put method called')
        console.log(command);
        return await this.commandBus.execute(command);
    }

    @Delete(':key')
    async delete(@Param() command: DeleteUserCommand) {
        console.log('Delete method called')
        return await this.commandBus.execute(command);
    }
}
