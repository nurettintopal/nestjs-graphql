import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Invite {
  @Field((type) => ID)
  id: string;

  @Field()
  user_id: string;

  @Field()
  invited_email: string;

  @Field({ nullable: true })
  invited_user_id: string;

  @Field()
  status: string;

  @Field()
  updated_at: string;

  @Field()
  created_at: string;
}
