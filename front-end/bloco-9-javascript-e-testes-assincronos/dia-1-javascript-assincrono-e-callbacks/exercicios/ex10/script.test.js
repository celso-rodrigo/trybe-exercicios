beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Em ordem de linhas: 1, 4, 2, 1, 7, 10, 8, 2
// '1 - beforeEach' é executado antes do de cada um dos testes
// '1 - test' é executado apenas depois do primeiro '1 - beforeEach'
// '1 - afterEach' é executado depois de cada um dos testes
// '2 - beforeEach' é executado apenas antes do segundo teste'
// '2 - test' é executado apenas depois do '2 - beforeEach'
// '2 - afterEach' é executado apenas depois do segundo teste'
