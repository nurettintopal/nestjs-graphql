import { Field, InputType } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field()
  @Length(2, 16)
  name: string;

  @Field()
  @Length(2, 16)
  surname: string;

  @Field()
  @Length(6, 64)
  email: string;

  @Field()
  @Length(6, 64)
  password: string;

  @Field()
  @Length(6, 64)
  password_confirmation: string;

  @Field()
  @Length(2, 2)
  lang: string;
}
