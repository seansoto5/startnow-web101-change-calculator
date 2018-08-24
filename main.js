
    function calculateChange() {
        var due  = document.getElementById("amount-due").value;
        var paid = document.getElementById("amount-received").value;
        var change = (paid - due).toFixed(2);
        console.log(change);

        if (change < 0) {
            document.getElementById("message").innerHTML = "Not Enough Payment"

        } else {
            document.getElementById("message").innerHTML = "Your change is $" + change;
        }

        if (change == 0) {
            document.getElementById("message").innerHTML = "No change needed!"
        }

        if (change > 99) {
            var hundreds = change / 100;
            var change = change % 100;
            document.getElementById("hundreds-output").innerHTML = Math.floor(hundreds);
        } else {
            document.getElementById("hundreds-output").innerHTML = "0";
        }

        if (change > 49) {
            var fiftys = change / 50;
            var change = change % 50;
            document.getElementById("fiftys-output").innerHTML = Math.floor(fiftys);
        } else {
            document.getElementById("fiftys-output").innerHTML = "0";
        }

        if (change > 19) {
            var twenties = change / 20;
            var change = change % 20;
            document.getElementById("twentys-output").innerHTML = Math.floor(twenties);
        } else {
            document.getElementById("twentys-output").innerHTML = "0"
        }

        if (change > 9) {
            var tens = change / 10;
            var change = change % 10;
            document.getElementById("tens-output").innerHTML = Math.floor(tens);
        } else {
            document.getElementById("tens-output").innerHTML = "0";
        }

        if (change > 4) {
            var fives = change / 5;
            var change = change % 5;
            document.getElementById("fives-output").innerHTML = Math.floor(fives);
        } else {
            document.getElementById("fives-output").innerHTML = "0";
        }
        
        if (change > .99) {
          var dollars = change / 1;
          var change = change % 1;
          document.getElementById("dollars-output").innerHTML = Math.floor(dollars);
        
        }else {
            document.getElementById("dollars-output").innerHTML = "0";
        }

         if (change > .24) {
          var quarters = change / .25;
          var change = change % .25;
          document.getElementById("quarters-output").innerHTML = Math.floor(quarters);
          
        } else {
            document.getElementById("quarters-output").innerHTML = "0";
        }

         if (change > .09) {
          var dimes = change / .10;
          var change = change % .10;
          document.getElementById("dimes-output").innerHTML = Math.floor(dimes);
                  
        } else {
            document.getElementById("dimes-output").innerHTML = "0";
        }

        if (change > .04) {
          var nickels = change / .05;
          var change = change % .05;
          document.getElementById("nickels-output").innerHTML = Math.floor(nickels);
                    
        } else {
            document.getElementById("nickels-output").innerHTML = "0";
        }

         if (change > 0) {
          var pennies = change / .01;
          document.getElementById("pennies-output").innerHTML = Math.round(pennies);

        } else {
            document.getElementById("pennies-output").innerHTML = "0";
        }
      } 
  


