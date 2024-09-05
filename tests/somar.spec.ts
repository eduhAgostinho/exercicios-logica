import { somar } from '../src/somar';
describe('somar', () => {
  it('deve retornar 5 para 2 + 3', () => {
    expect(somar(2, 3)).toBe(5);
  });

});
