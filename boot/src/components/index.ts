import { Container } from 'typedi';
import { hamburgerOrderFactory, hamburgerOrderRepository, hamburgerRepository } from './data';

export default () => {
  Container.set('hamburgerRepository', hamburgerRepository);
  Container.set('hamburgerOrderRepository', hamburgerOrderRepository);
  Container.set('hamburgerOrderFactory', hamburgerOrderFactory);
};
