import {
  HamburgerOrderFactory,
  HamburgerOrderRepository,
  HamburgerRepository,
} from '@krmcbride/hexample-tsnode-core';
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Inject, Service } from 'typedi';
import Hamburger from '../schema/Hamburger';
import HamburgerOrder from '../schema/HamburgerOrder';

@Service()
@Resolver(HamburgerOrder)
export default class HamburgerOrderResolver {
  constructor(
    @Inject('hamburgerOrderFactory')
    private readonly hamburgerOrderFactory: HamburgerOrderFactory,
    @Inject('hamburgerOrderRepository')
    private readonly hamburgerOrderRepository: HamburgerOrderRepository,
    @Inject('hamburgerRepository')
    private readonly hamburgerRepository: HamburgerRepository,
  ) {}

  @Query(() => HamburgerOrder, { nullable: true })
  async hamburgerOrder(@Arg('orderId') orderId: string): Promise<HamburgerOrder | undefined> {
    return this.hamburgerOrderRepository.findByOrderId(orderId);
  }

  @FieldResolver(() => [Hamburger])
  async hamburgers(@Root() hamburgerOrder: HamburgerOrder): Promise<Hamburger[]> {
    return this.hamburgerRepository.findByOrderId(hamburgerOrder.orderId);
  }

  @Mutation(() => HamburgerOrder)
  createOrder(): Promise<HamburgerOrder> {
    return this.hamburgerOrderFactory.createOrder();
  }
}
