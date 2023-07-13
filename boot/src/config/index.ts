import { environment } from '@krmcbride/plankton';

const { getPropertyAsSecret } = environment;

export default {
  mongodb: {
    uri: getPropertyAsSecret('mongodb.uri'),
  },
};
