import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Invite } from ".";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  email: string;

  @Field()
  lang: string;

  @Field()
  status: string;

  @Field()
  updated_at: string;

  @Field()
  created_at: string;

  invites: [Invite];
}
