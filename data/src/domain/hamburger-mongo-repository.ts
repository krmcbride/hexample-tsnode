import { Collection } from 'mongodb';
import { IndexDef, SimpleMongoRepository } from '@krmcbride/plankton-data-mongodb';
import { Hamburger, HamburgerRepository } from '@krmcbride/hexample-tsnode-core';
import HamburgerMongoDto from '../mongodb/hamburger-mongo-dto';

const INDEX_DEFS = [new IndexDef('orderId_idx_1', { orderId: 1 }, false)];

export default class HamburgerMongoRepository
  extends SimpleMongoRepository<HamburgerMongoDto>
  implements HamburgerRepository
{
  constructor(collectionSupplierFactory: (collectionName: string) => () => Promise<Collection>) {
    super(collectionSupplierFactory('hamburger'));
  }

  findByOrderId(orderId: string): Promise<Hamburger[]> {
    return this.find({ orderId }, {});
  }

  // eslint-disable-next-line class-methods-use-this
  protected getIndexDefs(): IndexDef[] {
    return INDEX_DEFS;
  }
}
