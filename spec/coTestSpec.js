const expect = require('chai').expect;
const coTest = require('../src/coTest');
const product = require('../src/product');

const CarInsurance = coTest.CarInsurance;
const Product = product.Product;

describe('Products', function describe() {
  it('should foo', function it() {
    const coTest = new CarInsurance([new Product('foo', 0, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal('foo');
  });

  it('price should not be negative', function it() {
    const coTest = new CarInsurance([new Product('Low Coverage', 4, -12)]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(0);
  });

  it('price should have at least one element', function it() {
    const coTest = new CarInsurance([new Product('Medium Coverage', 4, -12)]);
    const products = coTest.updatePrice();
    expect(products).to.be.instanceof(Array);
    expect(products).to.have.length.above(0);
  });

  it('should decrease price by one when sellIn is greater than 0', function it() {
    const coTest = new CarInsurance([new Product('Medium Coverage', 5, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(9);
  });

  it('should decrease price by two when sellIn is lower than 0', function it() {
    const coTest = new CarInsurance([new Product('Low Coverage', -1, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(8);
  });

  it('Full Coverage - should increase price when getting older', function it() {
    const coTest = new CarInsurance([new Product('Full Coverage', 5, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(11);
  });

  it('Full Coverage - price should not be greater than 50 ', function it() {
    const coTest = new CarInsurance([new Product('Full Coverage', 7, 49)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(50);
  });

  it('Mega Coverage - price and sellIn should be the same for legendary products', function it() {
    const coTest = new CarInsurance([new Product('Mega Coverage', 2, 11)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(11);
  });

  it('Mega Coverage -price could be greater than 50', function it() {
    const coTest = new CarInsurance([new Product('Mega Coverage', 6, 83)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(83);
  });

  it('Special Full Coverage - should increases by 2 when there are 10 days or less', function it() {
    const coTest = new CarInsurance([new Product('Special Full Coverage', 9, 21)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(8);
    expect(products[0].price).equal(23);
  });

  it('Special Full Coverage - should increases by 3 when there are 5 days or less', function it() {
    const coTest = new CarInsurance([new Product('Special Full Coverage', 3, 7)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(10);
  });

  it('Special Full Coverage - should drops to 0 when no more days left', function it() {
    const coTest = new CarInsurance([new Product('Special Full Coverage', -4, 5)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-5);
    expect(products[0].price).equal(0);
  });

  it('Super Sale - should degrade in price twice as fast as normal Products when sellIn is greater than 0', function it() {
    const coTest = new CarInsurance([new Product('Super Sale', 4, 25)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(3);
    expect(products[0].price).equal(23);
  });

  it('Super Sale - should degrade in price four times as fast as normal Products when sellIn is lower than 0', function it() {
    const coTest = new CarInsurance([new Product('Super Sale', -2, 25)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(21);
  });
});
