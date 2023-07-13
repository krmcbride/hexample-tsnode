import { AbstractMongoDto } from '@krmcbride/plankton-data-mongodb';

export default class HamburgerOrderMongoDto extends AbstractMongoDto {
  constructor(id: string | null, public orderId: string) {
    super(id || undefined);
  }
}
