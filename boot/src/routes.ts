import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { RoutesCallbackArgs } from '@krmcbride/plankton';
import { resolvers } from '@krmcbride/hexample-tsnode-api';

export default async ({ graphql }: RoutesCallbackArgs) => {
  await graphql(
    await buildSchema({
      resolvers,
      container: Container,
    }),
  );
};
