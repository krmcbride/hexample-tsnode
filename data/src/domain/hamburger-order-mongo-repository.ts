import { Collection } from 'mongodb';
import { IndexDef, SimpleMongoRepository } from '@krmcbride/plankton-data-mongodb';
import { HamburgerOrder, HamburgerOrderRepository } from '@krmcbride/hexample-tsnode-core';
import HamburgerOrderMongoDto from '../mongodb/hamburger-order-mongo-dto';

const INDEX_DEFS = [new IndexDef('orderId_idx_1', { orderId: 1 }, true)];

export default class HamburgerOrderMongoRepository
  extends SimpleMongoRepository<HamburgerOrderMongoDto>
  implements HamburgerOrderRepository
{
  constructor(collectionSupplierFactory: (collectionName: string) => () => Promise<Collection>) {
    super(collectionSupplierFactory('hamburgerOrder'));
  }

  findByOrderId(orderId: string): Promise<HamburgerOrder | undefined> {
    return this.findOne({ orderId });
  }

  // eslint-disable-next-line class-methods-use-this
  protected getIndexDefs(): IndexDef[] {
    return INDEX_DEFS;
  }
}
