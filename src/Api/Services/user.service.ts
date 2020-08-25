import { Injectable } from "@nestjs/common";
import { CreateUserInput, UsersArgs } from "../DTOs";
import { User } from "../Models";

@Injectable()
export class UserService {
  /**
   * MOCK
   * Put some real business logic here
   */

  mockUserData = {
    id: "uuid",
    name: "fake name",
    surname: "fake surname",
    email: "fakemail@fakedomain.localhost",
    lang: "tr",
    status: "ACTIVE",
    updated_at: "2020-08-25 00:00:00",
    created_at: "2020-08-25 00:00:00",
  };

  async create(data: CreateUserInput): Promise<User> {
    console.log(`Mutation User.create: ${JSON.stringify(data)}`);
    return this.mockUserData as any;
  }

  async find(id: string): Promise<User> {
    console.log(`Query User.find: ${JSON.stringify({ id })}`);

    return this.mockUserData as any;
  }

  async search(usersArgs: UsersArgs): Promise<User[]> {
    console.log(`Query User.search => ${JSON.stringify(usersArgs)}`);
    return [this.mockUserData] as User[];
  }

  async delete(id: string): Promise<boolean> {
    console.log(`Mutation User.delete: ${JSON.stringify({ id })}`);
    return true;
  }
}
