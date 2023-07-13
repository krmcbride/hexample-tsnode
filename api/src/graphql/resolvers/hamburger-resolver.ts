import { HamburgerRepository } from '@krmcbride/hexample-tsnode-core';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { Inject, Service } from 'typedi';
import Hamburger from '../schema/Hamburger';
import HamburgerInput from '../schema/HamburgerInput';

@Service()
@Resolver(Hamburger)
export default class HamburgerResolver {
  constructor(
    @Inject('hamburgerRepository')
    private readonly hamburgerRepository: HamburgerRepository,
  ) {}

  @Mutation(() => Hamburger)
  addHamburgerToOrder(@Arg('hamburger') hamburgerInput: HamburgerInput): Promise<Hamburger> {
    return this.hamburgerRepository.save(hamburgerInput);
  }
}
