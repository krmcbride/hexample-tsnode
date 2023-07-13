import { CrudRepository } from '@krmcbride/plankton-data-commons';
import Hamburger from './hamburger';

export default interface HamburgerRepository extends CrudRepository<Hamburger, string> {
  findByOrderId(orderId: string): Promise<Hamburger[]>;
}
