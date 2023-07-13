import { CrudRepository } from '@krmcbride/plankton-data-commons';
import HamburgerOrder from './hamburger-order';

export default interface HamburgerOrderRepository extends CrudRepository<HamburgerOrder, string> {
  findByOrderId(orderId: string): Promise<HamburgerOrder | undefined>;
}
