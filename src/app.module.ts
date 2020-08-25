import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApiModule } from "./Api/api.module";

@Module({
  imports: [
    ApiModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "./src/schema.gql",
    }),
  ],
})
export class AppModule {}
