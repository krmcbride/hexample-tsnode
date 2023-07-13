import HamburgerOrder from './hamburger-order';

export default interface HamburgerOrderFactory {
  createOrder(): Promise<HamburgerOrder>;
}
