import { mongoClientFactory } from '@krmcbride/plankton-data-mongodb';
import { HamburgerOrderFactoryImpl } from '@krmcbride/hexample-tsnode-core';
import {
  HamburgerMongoRepository,
  HamburgerOrderMongoRepository,
} from '@krmcbride/hexample-tsnode-data';
import config from '../config';

export const mongoClientPromise = (async () =>
  mongoClientFactory({ uri: await config.mongodb.uri.decrypt() }))();

const getCollection = async (collectionName: string) =>
  (await mongoClientPromise).db().collection(collectionName);

const collectionSupplierFactory = (collectionName: string) => () => getCollection(collectionName);

export const hamburgerRepository = new HamburgerMongoRepository(collectionSupplierFactory);
export const hamburgerOrderRepository = new HamburgerOrderMongoRepository(
  collectionSupplierFactory,
);
export const hamburgerOrderFactory = new HamburgerOrderFactoryImpl(hamburgerOrderRepository);
