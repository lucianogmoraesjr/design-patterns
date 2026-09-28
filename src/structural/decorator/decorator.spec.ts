import { CreamCheeseCrust } from './cream-cheese-crust.js';
import { MozzarellaPizza } from './mozzarella-pizza.js';
import { WholeWheat } from './whole-wheat.js';

describe('Decorator Pattern', () => {
  it('should create a mozzarella pizza', () => {
    const pizza = new MozzarellaPizza();

    expect(pizza.getDescription()).toBe('Pizza de Mussarela');
    expect(pizza.getPrice()).toBe(22);
  });

  it('should create a mozzarella pizza with cream cheese crust', () => {
    const pizza = new MozzarellaPizza();
    const pizzaWithCrust = new CreamCheeseCrust(pizza);

    expect(pizzaWithCrust.getPrice()).toBe(30.5);
    expect(pizzaWithCrust.getDescription()).toBe(
      'Pizza de Mussarela + Borda de Requeijão',
    );
  });

  it('should create a mozzarella pizza with cream cheese crust and whole wheat', () => {
    const pizza = new MozzarellaPizza();
    const withCrust = new CreamCheeseCrust(pizza);
    const withWholeWheat = new WholeWheat(withCrust);

    expect(withWholeWheat.getPrice()).toBe(35.5);
    expect(withWholeWheat.getDescription()).toBe(
      'Pizza de Mussarela + Borda de Requeijão + Massa Integral',
    );
  });
});
