import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { CreateUserInput, UsersArgs } from "../DTOs";
import { User } from "../Models";
import { UserService } from "../Services";

const pubSub = new PubSub();

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args("id") id: string): Promise<User> {
    const user = await this.userService.find(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query((returns) => [User])
  users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.userService.search(usersArgs);
  }

  @Mutation((returns) => User)
  async createUser(
    @Args("newUserData") newUserData: CreateUserInput
  ): Promise<User> {
    const user = await this.userService.create(newUserData);
    console.log(
      `Subscription User.created: ${JSON.stringify({
        userCreated: user,
      })}`
    );
    pubSub.publish("UserCreated", { userCreated: user });
    return user;
  }

  @Mutation((returns) => Boolean)
  async deleteUser(@Args("id") id: string) {
    return this.userService.delete(id);
  }

  @Subscription((returns) => User)
  userCreated() {
    return pubSub.asyncIterator("UserCreated");
  }
}
