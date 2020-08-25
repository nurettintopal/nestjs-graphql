import { Module } from "@nestjs/common";
import { UserResolver, InviteResolver } from "./resolvers";
import { UserService, InviteService } from "./services";

@Module({
  providers: [
    UserResolver, UserService,
    InviteResolver, InviteService,
  ],
})
export class ApiModule {}
