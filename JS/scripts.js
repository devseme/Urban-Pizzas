//business logic

function totalAmount(size,crust,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;

}
      totalAmount.prototype.Price = function(){
            
          return this.size + this.crust + this.toppings ;
      }




$(document).ready(function () {

    let pizzaSize = parseInt($("#size").value());
    let pizzaCrust = parseInt($("#crust").value());
    let toppings = parseInt($("#toppings").value())

});