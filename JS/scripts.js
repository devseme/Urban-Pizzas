//business logic

function totalAmount(size,crust,toppings,number){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;

}
      totalAmount.prototype.Price = function(){            
          return this.size + this.crust + this.toppings ;
      }
        totalAmount.prototype.totalForPizza = function(){
          return this.number*(this.size + this.crust + this.toppings) ;
        }

$(document).ready(function () {
       $("#amount").click(function(){
        let pizzaSize = parseInt($("#size").val());
        let pizzaCrust = parseInt($("#crust").val());
        let toppings = parseInt($("#toppings").val());

          let total = new totalAmount(pizzaSize,pizzaCrust,toppings)
            

           $("#total").text(total.Price());
          let numberOfPizzas = parseInt($ ("#number").val());
             let amountPaid = new totalAmount(pizzaSize,pizzaCrust,toppings,numberOfPizzas);
               
             $("#total").text(" Your total amount to pay is : "  + "ksh" + amountPaid.totalForPizza());


     

       });
      
       $("#delivery-form").submit(function(event){
           event.preventDefault();

        let yourName = $("#name-1").val();

        alert("Heey"+ " " + yourName + ",We`ve received your order and it will be delivered soon.Thanks!")
       });
       

});

