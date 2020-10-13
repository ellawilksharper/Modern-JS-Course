


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