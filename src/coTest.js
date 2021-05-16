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
    for (var i = 0; i < this.products.length; i++) {
      let currentPrice = this.products[i].price;
      let currentSellIn =  this.products[i].sellIn;

      switch(this.products[i].name) {
        case 'Full Coverage': {
          if (currentPrice < 50) {
            this.products[i].price =  currentPrice + 1;
            this.products[i].sellIn = currentSellIn - 1;
          }
          break;
        };
        case 'Mega Coverage': {
          this.products[i].sellIn = currentSellIn;
          this.products[i].price = currentPrice;
          break;
        };
        case 'Special Full Coverage': {
          if (currentPrice < 50) {
            this.products[i].price =  currentPrice + 1;
            if (this.products[i].price < 50) {
              if (this.products[i].sellIn < 11) {
                this.products[i].price =  this.products[i].price + 1;
              }
              if (this.products[i].sellIn < 6) {
                this.products[i].price =  this.products[i].price + 1;
              }
            }
          }
          if (this.products[i].sellIn < 0) {
            this.products[i].price = 0;
          }
          this.products[i].sellIn = currentSellIn - 1;
          break;
        };
        case 'Super Sale': {
          if (currentPrice > 0) {
            this.products[i].price =  currentPrice - 2;
          }
          if (currentSellIn < 0) {
            if (currentPrice > 0) {
              this.products[i].price =  currentPrice - 4;
            }
          } 
          this.products[i].sellIn = currentSellIn - 1;
          break;
        };
        default: {
          this.products[i].sellIn = currentSellIn - 1;
          if (currentSellIn > 0) {
            if (currentPrice > 0) {
              this.products[i].price =  currentPrice - 1;
            }
          } else {
            if (currentPrice > 0) {
              this.products[i].price =  currentPrice - 2;
            }
          }
          break;
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
