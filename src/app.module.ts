import { Module, HttpModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule } from "@nestjs/config";
import { AppConfig } from "./Config";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { UserResolver, InviteResolver } from "./Resolvers";
import { UserService, InviteService } from "./Services";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
    }),
    HttpModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "./src/schema.gql",
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [UserResolver, UserService, InviteResolver, InviteService],
})
export class AppModule {}
