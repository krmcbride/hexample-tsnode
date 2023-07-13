import crypto from 'crypto';
import hamburgerOrder from './hamburger-order';
import HamburgerOrderFactory from './hamburger-order-factory';
import HamburgerOrderRepository from './hamburger-order-repository';

const generateId = () => crypto.randomBytes(5).toString('hex');

export default class HamburgerOrderFactoryImpl implements HamburgerOrderFactory {
  constructor(private readonly hamburgerOrderRepository: HamburgerOrderRepository) {}

  createOrder(): Promise<hamburgerOrder> {
    return this.hamburgerOrderRepository.save({ orderId: generateId() });
  }
}
