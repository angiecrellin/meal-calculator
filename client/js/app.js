//object for diner

var Diner = function (name){
    this.name = name,
    this.menuItems = [];
};

Diner.prototype.addMenuItems = function addMenuItems(items){
    items.forEach(function(item){
      this.menuItems.push(item);
    },this) 
    
  // this.menuItems.concat(items);  

};
Diner.prototype.getTotalMealCost = function getTotalMealCost(){
    
    var sum = 0
    this.menuItems.forEach(function(item){
      sum += item.cost
     
    })
    return sum;
    
};


//object for bill

var Bill = function(bill) {
    this.diners = bill.diners,
    this.setTaxRate(bill.taxRate),
    this.setTip(bill.tip);
};

Bill.prototype.addDiner = function addDiner(diner){
    this.diners.push(diner);
};


Bill.prototype.setTaxRate = function setTaxRate(taxRate){
    this.taxRate = (taxRate/100);
    
};


Bill.prototype.setTip = function setTip(tip){
    this.tip = (tip/100);
};

Bill.prototype.getGrandTotal = function getGrandTotal(){

  var data = {};
   data.sum = 0
   data.tip = 0
   data.dinerBreakdown = [];
   this.diners.forEach(function(diner){
    // Sue: $15.50 = $10.20 meal + $2.20 tax + $1.30 tip 
    var meal = diner.getTotalMealCost()
    var tax = meal * this.taxRate 
    var tip = meal * this.tip
    var sum = meal + tax + tip
     data.dinerBreakdown.push(diner.name + ': ' +'$' + meal.toFixed(2) + ' (meal) ' + '$' + tax.toFixed(2) + ' (tax) '  + '$' + tip.toFixed(2) + ' (tip) ')
     data.sum += sum
     data.tip += tip
   },this) 
   
   data.sum = data.sum.toFixed(2)
   data.tip = data.tip.toFixed(2)
   console.log(data)
   
   
}






//dummy data
var Sue = new Diner('Sue');
var John = new Diner('John');
var Johnny = new Diner('Johnny')

Sue.addMenuItems([
  {item:'salad', cost:8}, 
  {item:'pasta', cost:15}, 
  {item:'wine', cost:7}
  ]);
John.addMenuItems([
  {item:'soup', cost:5}, 
  {item:'steak', cost:25},
  {item:'beer', cost:6}
  ]);
  
Johnny.addMenuItems([
  {item:'chicken fingers', cost:3},
  {item:'milk', cost:1}
  ]);
  
var bill = new Bill({
  diners: [Sue, John, Johnny],
  taxRate: 8,
  tip: 15
  
})
bill.getGrandTotal();


var taxRate = 8;
var tip = 15;
