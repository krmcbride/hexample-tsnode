import { AbstractMongoDto } from '@krmcbride/plankton-data-mongodb';

export default class HamburgerMongoDto extends AbstractMongoDto {
  constructor(
    id: string | null,
    public orderId: string,
    public toppings: string[],
    public customizations: string,
  ) {
    super(id || undefined);
  }
}
