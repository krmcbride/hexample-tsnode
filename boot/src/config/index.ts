import { environment } from '@krmcbride/plankton';

const { getProperty, getPropertyAsSecret } = environment;

export default {
  slsBaseUrl: getProperty('sls.baseUrl'),
  mongodb: {
    uri: getPropertyAsSecret('mongodb.uri'),
  },
};
