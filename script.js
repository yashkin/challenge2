let number = 0;
   function increment() {
       number++;
       document.getElementById("number").innerHTML = number;
   }
   function decrement() {
       number--;
       document.getElementById("number").innerHTML = number;
   }
   function reset() {
       let number = 0;
       document.getElementById("number").innerHTML = number;
   }