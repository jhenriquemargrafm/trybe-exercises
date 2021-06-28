const data = require('./exercicio1');

// Exercicio 1
test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  data.randomNumber = jest.fn().mockReturnValue(10);
  expect(data.randomNumber()).toBe(10);
  expect(data.randomNumber).toHaveBeenCalled();
  expect(data.randomNumber).toHaveBeenCalledTimes(1);
});

// Exercicio 2
test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  data.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(data.randomNumber(15, 3)).toBe(5);
  expect(data.randomNumber).toHaveBeenCalled();
  expect(data.randomNumber).toHaveBeenCalledTimes(1);
  expect(data.randomNumber).toHaveBeenCalledWith(15, 3);
});
