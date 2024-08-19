
const { adicao, subtracao, multiplicacao, divisao } = require('./funcoes.js');

test('Adição de 2 + 3 deve resultar em 5', () => {
  expect(adicao(2, 3)).toBe(5);
});

test('Subtração de 5 - 3 deve resultar em 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('Multiplicação de 4 * 3 deve resultar em 12', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('Divisão de 6 / 2 deve resultar em 3', () => {
  expect(divisao(6, 2)).toBe(3);
});

test('Divisão por zero deve lançar erro', () => {
  expect(divisao(6, 0)).toBe("erro");
});
