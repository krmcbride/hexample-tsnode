import { EventEmitter } from 'stream';
import supertest, { SuperTest, Test } from 'supertest';

describe('plankton-info', () => {
  let request: SuperTest<Test>;
  let emitter: EventEmitter;
  beforeAll(async () => {
    await import('@krmcbride/plankton-server/dist/src/boot');
    request = supertest(await api.app);
    emitter = (await import('@krmcbride/plankton')).emitter;
  });
  afterAll(() => {
    const promises: Promise<void>[] = [];
    emitter.emit('shutdown', promises);
    return Promise.all(promises);
  });
  describe('GET /info', () => {
    it('responds with a 200 and app info', () => {
      expect.assertions(1);
      return request
        .get('/info')
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual({ name: 'app', version: 'dev-snapshot' });
        });
    });
  });
});
