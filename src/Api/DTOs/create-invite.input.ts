import { Field, InputType } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class CreateInviteInput {
  @Field()
  @Length(6, 64)
  email: string;
}
