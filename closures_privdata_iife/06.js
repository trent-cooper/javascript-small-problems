"use strict";

let ItemCreator = (function() {

  function checkLength(string) {
    let str = string.replace(/\s/g, '');
    return str.length >= 5;
  }

  function checkWordCount(string) {
    let wordCount = string.split(' ').length;
    return wordCount === 1;
  }

  function setSKU(itemName, itemCategory) {
    let itemSKU = itemName.replace(/\s/g, '').substr(0, 3).toUpperCase();
    let catSKU = itemCategory.substr(0, 2).toUpperCase();
    return itemSKU + catSKU;
  }

  return function(itemName, itemCategory, quantity) {

    if (checkLength(itemName) && 
        checkLength(itemCategory) && 
        checkWordCount(itemCategory) &&
        !isNaN(quantity)) {
      this.itemName = itemName;
      this.itemCategory = itemCategory;
      this.quantity = quantity;
      this.sku = setSKU(itemName, itemCategory);
    } else {
      this.notValid = true;
    }
  }
})();

let ItemManager = {
  Creator: ItemCreator,
  items: {},

  create(itemName, itemCategory, quantity) {
    // create new item, check validity of inputs, push to .items if OK, return false if not
    let newItem = new this.Creator(itemName, itemCategory, quantity);

    if (newItem.notValid) {
      return false;
    } else {
      this.items[newItem.sku] = newItem;
    }
  },

  getItem(sku) {
    return this.items[sku];
  },

  update(sku, obj) {
    Object.assign(this.getItem(sku), obj);
  },

  delete(sku) {
    // find stored item by sku and delete
    delete this.items[sku];
  },

  inStock() {
    let arr = [];

    for (let sku in this.items) {
      let item = this.items[sku];
      if (item.quantity > 0) {
        arr.push(item);
      }
    }

    return arr;
  },

  itemsInCategory(category) {
    let arr = [];

    for (let sku in this.items) {
      let item = this.items[sku];
      if (item.itemCategory === category) {
        arr.push(item);
      }
    }

    return arr;
  },

}

let ReportManager = {

  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(sku) {
    let item = this.items.getItem(sku);

    return {
      itemInfo() {
        for (let prop in item) {
          if (item.hasOwnProperty(prop)) {
            console.log(`${prop}: ${item[prop]}`);
          }
        }
      },
    }

  },

  reportInStock() {
    let report = this.items.inStock().map(item => item.itemName).join(',');

    console.log(report);
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// // football,kitchen pot
ReportManager.reportInStock();

// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');

// ItemManager.delete('SOCSP');
// // returns list the remaining 3 valid items (soccer ball is removed from the list)
// ItemManager.items;

// let kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();



// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports', 3);              // valid item
// // console.log(ItemManager.items);
// // ItemManager.delete('SOCSP');
// // console.log('--------');
// // console.log(ItemManager.items);

// console.log(ItemManager.itemsInCategory('sports'));
