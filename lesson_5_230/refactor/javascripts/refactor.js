let order;

document.addEventListener('DOMContentLoaded', function () {

  class Inventory {
    constructor() {
      this.collection = [];
      this.lastId = 0;
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  
    //good
    setDate() {
      let date = new Date();
      document.getElementById('order_date').textContent = date.toUTCString();
    }
  
    cacheTemplate() {
      let template = document.getElementById('inventory_item');
      this.template = Handlebars.compile(template.innerHTML);
      template.remove();
    }
  
    //good
    add() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1,
      }
      this.collection.push(item);
  
      return item;
    }
  
    //good
    remove(id) {
      this.collection = this.collection.filter(item => item.id !== id);
    }
  
    //good
    get(id) {
      return this.collection.filter(item => item.id === id)[0];
    }
  
    //good
    update(itemHTML) {
      let id = this.findID(itemHTML);
      let item = this.get(id);
  
      let name = itemHTML.querySelector(`input[name="item_name_${id}"]`).value;
      let stockNum = itemHTML.querySelector(`input[name="item_stock_number_${id}"]`).value;
      let quantity = itemHTML.querySelector(`input[name="item_quantity_${id}"]`).value;
  
      item.name = name;
      item.stock_number = stockNum;
      item.quantity = quantity;
    }
  
    newItem(e) {
      e.preventDefault();
      let item = this.add();
      let element = document.createElement('TR');
      element.innerHTML = this.template(item);
      document.getElementById('inventory').appendChild(element);
    }
  
    //good
    findParent(e) {
      return e.target.closest('tr');
    }
  
    //good
    findID(item) {
      return +item.querySelector('input[type="hidden"]').value;
    }
  
    //good
    deleteItem(e) {
      e.preventDefault();
      if (e.target.tagName === 'A') {
        let item = this.findParent(e)
  
        item.remove();
        this.remove(this.findID(item));
      }
    }
  
    //good
    updateItem(e) {
      if (e.target.tagName === 'INPUT') {
        let item = this.findParent(e);
        this.update(item);
      }
  
    }
  
    bindEvents() {
      document.getElementById('add_item').addEventListener('click', this.newItem.bind(this));
      document.getElementById('inventory').addEventListener('click', this.deleteItem.bind(this));
      document.getElementById('inventory').addEventListener('focusout', this.updateItem.bind(this));
    }
  }

  order = new Inventory();
})



