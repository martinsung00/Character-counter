// List out all possible outcomes in a three round game of rock-paper-scissors with three people

var rockPaperScissors = function (
    ) {
      let result = [];
      let personOne = ['R', 'P', 'S'];
      let personTwo = ['R', 'P', 'S'];
      let personThree = ['R', 'P', 'S'];
    
      for (let i = 0; i < personOne.length; i++) {
        for (let j = 0; j < personTwo.length; j++) {
          for (let k = 0; k < personThree.length; k++) {
            result.push(personOne[i] + personTwo[j] + personThree[k])
          }
        }
      }
      return result;
    };
    
    rockPaperScissors();

// List out all possible outcomes in N number of rounds with three people

