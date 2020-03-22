var cardData = [{
    network: 'Visa',       // card issuer (network)
    prefixes: ['4'],	 // beginning digits
    lengths: [13, 16, 19]  // lengths of card numbers
  },{
    network: 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },{
    network: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },{
    network: 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }];
   
  function detectNetwork(cardNumber, cardData) {
    // We need the first two digits to compare and recognize which card we are using. Since visa uses only one first digit as a specifier, we also need a variable to store only the first digit to compare.
    Number(cardNumber)
    let firstTwoDigits = Number(cardNumber.slice(0, 2))
    let firstDigit = Number(cardNumber.slice(0, 1))

    // If the card length is not contained in any of the card data lengths, we can immediately tell it isnt any network we know; so return undefined.
    if (cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 19) {
    // We need iterate through all the card data, and within the card data we need to iterate through both the length and the prefixes for comparison purposes.
        for (i = 0; i < cardData.length; i++) {
            for (x = 0; x < cardData[i]['prefixes'].length; x++) {
                let cardPrefixes = Number(cardData[i]['prefixes'][x]);

                for (n = 0; n < cardData[i]['lengths'].length; n++) {
                    let cardLength = cardData[i]['lengths'][n];
                    
    // There are two conditions we need to meet, length of the card and first/ first two digits to find the specific card network.
                    if (firstTwoDigits === cardPrefixes || firstDigit === cardPrefixes && cardNumber.length === cardLength) {
                        return cardData[i]['network'];
                    }
                }
            }
        }
    } else {
        return undefined;
    }
  }
           
  
  console.log(detectNetwork('4555555555555555', cardData))
