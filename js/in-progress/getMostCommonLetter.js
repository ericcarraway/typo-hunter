// work in progress...
// there are some edge cases that produce incorrect results

var getMostCommonLetter = function(str) {
    // returns the most common letter in a string
    // TODO: what to do if there is a tie...
    
    'use strict';

    // remove spaces
    str = str.replace(/\s+/g, '');

    // uppercase shall count the same as lowercase
    // convert everything to lowercase
    str.toLowerCase();

    // convert the string to an array
    var letterArray = str.split('');

    var candidateLetter = {
        letter : '',
        count : 0
    };

    var championLetter = {
        letter : '',
        count : 0
    };

    var range = letterArray.length - 1;

    for (var i = 0; i < range; i++) {
        
        candidateLetter.letter = letterArray[i];

            for (var j = 0; j < range; j++) {
                
                // if the next letter is the same as the current letter
                if (candidateLetter.letter === letterArray[j]) {
                    // then increment the quantity
                    candidateLetter.count++;
                }

            }
            
            // compare the quantities between
            // the candidateLetter and the reigning championLetter

            if (candidateLetter.count > championLetter.count) {
                // we have a new winner
                championLetter.letter = candidateLetter.letter;
                championLetter.count = candidateLetter.count;
                
                // reset for the next candidateLetter
                candidateLetter.letter = '';
                candidateLetter.count = 1;
            }

            // the candidate is not the winner; reset
            else {
                candidateLetter.letter = '';
                candidateLetter.count = 1;
            }
        
        // back to the top of the loop
        // to check the next letter in the letterArray
        }

    //return championLetter.letter;
    
    // alternative return
    return 'champion ' + championLetter.letter + ' was used ' + championLetter.count + ' times';
};
