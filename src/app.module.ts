import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './controllers/user.controller';
import { CreateUserHandler } from './application/commands/user/create-user.command';
import { GetUserHandler } from './application/commands/user/get-user.query';
import { DeleteUserHandler } from './application/commands/user/delete-user.command';
import { UpdateUserHandler } from './application/commands/user/update-user.command';

export const commandHandlers = [CreateUserHandler, GetUserHandler, UpdateUserHandler, DeleteUserHandler]

@Module({
  imports: [CqrsModule],
  controllers: [AppController, UserController],
  providers: [...commandHandlers],
})
export class AppModule { }
