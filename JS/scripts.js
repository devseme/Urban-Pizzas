//business logic

function totalAmount(size, crust, toppings, number) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.number = number;
}
totalAmount.prototype.Price = function () {
  return this.size + this.crust + this.toppings;
};
totalAmount.prototype.totalForPizza = function () {
  return this.number * (this.size + this.crust + this.toppings);
};
let finalCharge = 0;
$(document).ready(function () {
  $("#amount").click(function () {
    let pizzaSize = parseInt($("#size").val());
    let pizzaCrust = parseInt($("#crust").val());
    let toppings = parseInt($("#toppings").val());

    let total = new totalAmount(pizzaSize, pizzaCrust, toppings);

    $("#total").text(total.Price());
    let numberOfPizzas = parseInt($("#number").val());
    let amountPaid = new totalAmount(
      pizzaSize,
      pizzaCrust,
      toppings,
      numberOfPizzas
    );

    $("#total").text(
      " Your total amount to pay is : " + "ksh" + amountPaid.totalForPizza()
    );
    

  });
  //ui interface logic

  $("#formdeliver").click(function (event) {
    event.preventDefault();
    let nameEntered = $("#person").val();
    let locationEntered = $("#place").val();

    alert("Hey " + nameEntered + ",We`ve received your order and it will be delivered to " + locationEntered + "soon!");
    let pizzaSize = parseInt($("#size").val());
    let pizzaCrust = parseInt($("#crust").val());
    let toppings = parseInt($("#toppings").val());
    let numberOfPizzas = parseInt($("#number").val());
    let amountPaid = new totalAmount(
	pizzaSize,
	pizzaCrust,
	toppings,
	numberOfPizzas
      );
    finalCharge += amountPaid.totalForPizza();
    $("#finalamount").text("Your Total final charge is Ksh "  +  (finalCharge + 200));


  });
   $("#orderpizza").click(function(){

	$(".private-details").slideToggle(1000);
   })
});
