//A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

//Write a function called isPangram, which checks to see if a given setence contains every latter of the alphabet. Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sent) {
    //check that each letter of the alphabet is in the sentence
 if(sent.length < 26) {
    return false;
 }
    //if all letters are in the sentence return true
 let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(let i = 0; i <= alphabet.length; i++) {
        if(sent.includes(alphabet));
        return true;
    }
    return false;
}
