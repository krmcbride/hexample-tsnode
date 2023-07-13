import { Field, InputType } from 'type-graphql';
import Hamburger from './Hamburger';

@InputType({ description: 'New Hamburger' })
export default class HamburgerInput implements Partial<Hamburger> {
  @Field(() => String)
  orderId!: string;

  @Field(() => [String])
  toppings!: string[];

  @Field(() => String, { nullable: true })
  customizations?: string;
}
