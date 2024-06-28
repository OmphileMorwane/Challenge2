for (let n = 1; n <= 100; n++) {
        // Initialize an empty string to build the output
        let output = "";
        
        // Check if the number is divisible by 3
        if (n % 3 == 0) {
          // If true, append 'Fizz' to the output string
          output += "Fizz";
        }
        
        // Check if the number is divisible by 5
        if (n % 5 == 0) {
          // If true, append 'Buzz' to the output string
          output += "Buzz";
        }
        
        // If output is not empty, print output
        // Otherwise, print the number itself
        console.log(output || n);
      }