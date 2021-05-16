class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }  
  updatePrice() {
    if (this.products.length > 0) {
      for (const product of this.products) {
        switch(product.name) {
          case 'Full Coverage': {
            if (product.price < 50) {
              product.price = product.price + 1;
              if (product.sellIn < 0 && product.price < 50) {
                product.price =   product.price + 1;
              }
            }
            product.sellIn = product.sellIn - 1;
            break;
          };
          case 'Mega Coverage': {
            product.sellIn = product.sellIn;
            product.price = product.price;
            break;
          };
          case 'Special Full Coverage': {
            if (product.price < 50) {
              product.price =  product.price + 1;
              if (product.price < 50) {
                if (product.sellIn < 11) {
                  product.price =  product.price + 1;
                }
                if (product.sellIn < 6) {
                  product.price =  product.price + 1;
                }
              }
            }
            if (product.sellIn < 0) {
              product.price = 0;
            }
            product.sellIn = product.sellIn - 1;
            break;
          };
          case 'Super Sale': {
            if (product.sellIn > 0) {
              product.price =  product.price - 2;
            } else {
              product.price =  product.price - 4;
            } 
            product.sellIn = product.sellIn - 1;
            break;
          };
          default: {
            if (product.sellIn > 0) {
              product.price =  product.price - 1;
            } else {
              product.price =  product.price - 2;
            }
            product.sellIn = product.sellIn - 1;
            break;
          }
        }

        if (product.price < 0) {
          product.price = 0;
        }
      }
    }
   
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
