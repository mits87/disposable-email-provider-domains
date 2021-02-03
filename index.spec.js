require('./data/domains.json');

jest.mock('./data/domains.json', () => ['domain1', 'domain2']);

const index = require('./index');

describe('index.js', () => {
  it('should returns a domains JSON list', async () => {
    expect(index.domains).toEqual(['domain1', 'domain2']);
  });
});
