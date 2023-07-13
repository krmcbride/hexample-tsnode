import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Hamburger' })
export default class Hamburger {
  @Field(() => String)
  orderId!: string;

  @Field(() => [String])
  toppings!: string[];

  @Field(() => String, { nullable: true })
  customizations?: string;
}
