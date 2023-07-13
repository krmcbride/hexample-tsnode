import { Field, ObjectType } from 'type-graphql';
import Hamburger from './Hamburger';

@ObjectType({ description: 'Hamburger order' })
export default class HamburgerOrder {
  @Field(() => String)
  orderId!: string;

  @Field(() => [Hamburger])
  hamburgers?: Hamburger[];
}
