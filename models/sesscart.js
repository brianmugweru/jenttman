module.exports = function Sesscart(oldCart) {

  this.items      = oldCart.items || {};
  this.totalQty   = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(id, size, fashionPrice,fashionid, fashionname, fashionphoto){
    var storedItem    = this.items[id];
    if(!storedItem){
      storedItem  = this.items[id] = {sizeid:id, size:size, fashionid:fashionid, fashionname: fashionname, fashionphoto:fashionphoto,qty:0, price:0};
    }
    storedItem.qty++;
    storedItem.price  = parseFloat(fashionPrice * storedItem.qty);
    this.totalQty++;
    this.totalPrice+=parseFloat(fashionPrice);
  };

  this.addqty = function(id, fashionPrice){
    var storedItem = this.items[id];
    storedItem.qty++;
    storedItem.price  = parseFloat(fashionPrice * storedItem.qty);
    this.totalQty++;
    this.totalPrice+=parseFloat(fashionPrice);
  };

  this.remove = function(id, fashionPrice){
    var storedItem = this.items[id];
    if(storedItem.qty == 1)
      delete storedItem;
    else{
      storedItem.qty--;
      storedItem.price = parseFloat(fashionPrice * storedItem.qty);
      this.totalQty--;
      this.totalPrice-=parseFloat(fashionPrice);
    }


  };
  
  this.generateArray = function(){
    var arr = [];
    for(var id in this.items){
      arr.push(this.items[id]);
    }
    return arr;
  };
};
