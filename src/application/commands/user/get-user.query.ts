import { IQuery, IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { IsNotEmpty } from "class-validator";
import { User } from "src/domain/models/user";

export class GetUserQuery implements IQuery {
    @IsNotEmpty()
    key: string;
}

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
    async execute(query: GetUserQuery): Promise<User> {
        return <User>{
            userId: '1010101',
            name: 'Test User',
            email: 'user@gmail.com'
        }
    }
}