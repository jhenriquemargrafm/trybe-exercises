const data = require('./exercicio1');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  data.randomNumber = jest.fn().mockReturnValue(10);
  expect(data.randomNumber()).toBe(10);
  expect(data.randomNumber).toHaveBeenCalled();
  expect(data.randomNumber).toHaveBeenCalledTimes(1);
});