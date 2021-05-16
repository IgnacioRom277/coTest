class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    if (this.products.length > 0) {
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];

        switch (product.name) {
          case 'Full Coverage': {
            if (product.price < 50) {
              product.price += 1;
            }
            product.sellIn -= 1;
            if (product.sellIn < 0 && product.price < 50) {
              product.price += 1;
            }
            break;
          }
          case 'Mega Coverage': {
            break;
          }
          case 'Special Full Coverage': {
            if (product.price < 50) {
              product.price += 1;
              if (product.price < 50) {
                if (product.sellIn < 11) {
                  product.price += 1;
                }
                if (product.sellIn < 6) {
                  product.price += 1;
                }
              }
            }
            if (product.sellIn < 0) {
              product.price = 0;
            }
            product.sellIn -= 1;
            break;
          }
          case 'Super Sale': {
            if (product.sellIn > 0) {
              product.price -= 2;
            } else {
              product.price -= 4;
            }
            product.sellIn -= 1;
            break;
          }
          default: {
            if (product.sellIn > 0) {
              product.price -= 1;
            } else {
              product.price -= 2;
            }
            product.sellIn -= 1;
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

module.exports = { CarInsurance };
