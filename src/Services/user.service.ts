import { HttpService, Injectable, Logger } from "@nestjs/common";
import { CreateUserInput, UsersArgs } from "../DTOs";
import { User } from "../Models";
import { ConfigService } from "@nestjs/config";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  /**
   * MOCK
   * Put some real business logic here
   */

  mockUserData = {
    id: "ec3f819ed1224e69ae082bf0d34a26ec",
    name: "fake name",
    surname: "fake surname",
    email: "fakemail@fakedomain.localhost",
    lang: "tr",
    status: "ACTIVE",
    updated_at: "2020-08-25 00:00:00",
    created_at: "2020-08-25 00:00:00",
  };

  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async create(
    params: CreateUserInput
  ): Promise<Observable<AxiosResponse<User>>> {
    const SERVICE_URL = this.configService.get("SERVICES.SERVICE_URL");
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
