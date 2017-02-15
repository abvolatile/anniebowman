function getTotal() {
   var runningTotal = 0;

//SIZE
   var sizeTotal = 0;
   var sizeArray = document.getElementsByClassName("size");
      //get checked pizza size, add to Order Info section
   for(var i=0; i<sizeArray.length; i++) {
      if(sizeArray[i].checked) {
         var pizzaSize = sizeArray[i].value;
         document.getElementById("pizzaSize").innerHTML = pizzaSize;
      }
   }
      //set sizeTotal to a value depending on checked box
   if(pizzaSize === "Personal Pizza") {
      sizeTotal = 6;
      document.getElementById("basePrice").innerHTML = "$"+sizeTotal+".00";
   } else if(pizzaSize === "Medium Pizza") {
      sizeTotal = 10;
      document.getElementById("basePrice").innerHTML = "$"+sizeTotal+".00";
   } else if(pizzaSize === "Large Pizza") {
      sizeTotal = 14;
      document.getElementById("basePrice").innerHTML = "$"+sizeTotal+".00";
   } else if(pizzaSize === "X-Large Pizza") {
      sizeTotal = 16;
      document.getElementById("basePrice").innerHTML = "$"+sizeTotal+".00";
   }
      //set subTotal to the value of sizeTotal
   runningTotal = sizeTotal;
   console.log(pizzaSize+" = $"+sizeTotal+".00");
   console.log("SubTotal: $"+runningTotal+".00");


//CRUST
   var crustTotal = 0;
   var crustArray = document.getElementsByClassName("crust");
      //get checked pizza crust, add to Order Info section
   for(var cr=0; cr<crustArray.length; cr++) {
      if(crustArray[cr].checked) {
         var pizzaCrust = crustArray[cr].value;
         document.getElementById("pizzaCrust").innerHTML = pizzaCrust;
      }
   }
      //set crustTotal to a value depending on checked box
   if(pizzaCrust === "Stuffed Crust") {
      crustTotal = 3;
      document.getElementById("crustTotal").innerHTML = "$"+crustTotal+".00";
   } else {
      crustTotal = 0;
   }
      //add crustTotal to runningTotal
   runningTotal += crustTotal;
   console.log(pizzaCrust+" = $"+crustTotal+".00");
   console.log("SubTotal: $"+runningTotal+".00");


//SAUCE
   var sauceTotal = 0;
   var sauceArray = document.getElementsByClassName("sauce");
      //get checked pizza size, add to Order Info section
   for(var s=0; s<sauceArray.length; s++) {
      if(sauceArray[s].checked) {
         var pizzaSauce = sauceArray[s].value;
         document.getElementById("pizzaSauce").innerHTML = pizzaSauce;
      }
   }
      //no sauce total to add - included in price
   console.log(pizzaSauce);
   console.log("SubTotal: $"+runningTotal+".00");


//CHEESE
   var cheeseTotal = 0;
   var cheeseArray = document.getElementsByClassName("cheese");
      //get checked cheese option, add to Order Info section
   for(var ch=0; ch<cheeseArray.length; ch++) {
      if(cheeseArray[ch].checked) {
         var pizzaCheese = cheeseArray[ch].value;
         document.getElementById("pizzaCheese").innerHTML = pizzaCheese;
      }
   }
      //set cheeseTotal to a value depending on checked box
   if(pizzaCheese === "Extra Cheese") {
      cheeseTotal = 3;
      document.getElementById("cheeseTotal").innerHTML = "$"+cheeseTotal+".00";
   } else {
      cheeseTotal = 0;
   }
      //add cheeeseTotal to runningTotal
   runningTotal += cheeseTotal;
   console.log(pizzaCheese+" = $"+cheeseTotal+".00");
   console.log("SubTotal: $"+runningTotal+".00");


//MEATS
   var meatTotal = 0;
   var chosenMeat = [];
   var meatArray = document.getElementsByClassName("meat");
      //get checked meat(s) and push into a new chosenMeat array
   for(var j = 0; j<meatArray.length; j++) {
      if(meatArray[j].checked) {
         chosenMeat.push("<br>"+meatArray[j].value);
         var pizzaMeat = "MEATS:"+chosenMeat;
         document.getElementById("pizzaMeat").innerHTML = pizzaMeat;
      }
   }
      //get total price for Meats
   if(chosenMeat.length > 1) {
      meatTotal = (chosenMeat.length - 1);
      document.getElementById("meatTotal").innerHTML = "$"+meatTotal+".00";
   } else {
      meatTotal = 0;
   }
      //add meatTotal to subTotal
   runningTotal += meatTotal;
   console.log("Checked meats: "+chosenMeat);
   console.log("SubTotal: $"+runningTotal+".00");
   //document.getElementById("subTotal").innerHTML = "$"+runningTotal+".00";


//VEGGIES
   var veggieTotal = 0;
   var chosenVeggie = [];
   var veggieArray = document.getElementsByClassName("veggie");
      //get checked veggie(s) and push into a new chosenVeggie array
   for(var v = 0; v<veggieArray.length; v++) {
      if(veggieArray[v].checked) {
         chosenVeggie.push("<br>"+veggieArray[v].value);
         var pizzaVeggie = "VEGGIES:"+chosenVeggie;
         document.getElementById("pizzaVeggie").innerHTML = pizzaVeggie;
      }
   }
      //get total price for Veggie(s)
   if(chosenVeggie.length > 1) {
      veggieTotal = (chosenVeggie.length - 1);
      document.getElementById("veggieTotal").innerHTML = "$"+veggieTotal+".00";
   } else {
      veggieTotal = 0;
   }
      //add veggieTotal to subTotal
   runningTotal += veggieTotal;
   console.log("Checked veggies: "+chosenVeggie);
   console.log("Total: $"+runningTotal+".00");

//TOTAL
document.getElementById("subTotal").innerHTML = "$"+runningTotal+".00";
}



/*
function getTotal() {
   var tipTotal = document.getElementById("tipTotal");
   if(tipTotal > 0) {
      document.getElementById("total").innerHTML = "$"+subTotal+tipTotal+".00";
   } else {
      document.getElementById("total").innerHTML = "$"+subTotal+".00";
   }
}
*/
