const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("foo");
  });

});

describe("Full Coverage", () => {
  it("should increase price when getting older", () => {
    const coTest = new CarInsurance([ new Product("Full Coverage", 5, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(11);
  })

  it("price should not be greater than 50 ", () => {
    const coTest = new CarInsurance([ new Product("Full Coverage", 7, 49)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(50);
  })
})

describe("Mega Coverage", () => {
  it("price and sellIn should be the same for legendary products", () => {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 2, 11)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(11);
  })

  it("price could be greater than 50", () => {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 6, 83)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(6);
    expect(products[0].price).equal(83);
  })
})

describe("Special Full Coverage", () => {
  it("should increases by 2 when there are 10 days or less", () => {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 9, 21)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(8);
    expect(products[0].price).equal(23);
  })

  it("should increases by 3 when there are 5 days or less", () => {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 3, 7)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(2);
    expect(products[0].price).equal(10);
  })

  it("should drops to 0 when no more days left", () => {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", -4, 5)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-5);
    expect(products[0].price).equal(0);
  })
})

describe("Super Sale", () => {
  it("should degrade in price twice as fast as normal Products when sellIn is greater than 0", () => {
    const coTest = new CarInsurance([ new Product("Super Sale", 4, 25)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(3);
    expect(products[0].price).equal(23);
  })

  it("should degrade in price four times as fast as normal Products when sellIn is lower than 0", () => {
    const coTest = new CarInsurance([ new Product("Super Sale", -2, 25)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(21);
  })
})

describe("Other Products", () => {
  it("should decrease price by one when sellIn is greater than 0", () => {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 5, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(9);
  })

  it("should decrease price by two when sellIn is lower than 0", () => {
    const coTest = new CarInsurance([ new Product("Low Coverage", -1, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(8);
  })
});