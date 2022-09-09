/**
 * @param {number} x
 * @return {boolean}
 */


 var isPalindrome = function(x) {
    // creates number as a temp array
    // .split() splits the string into substring and puts it into an array
    var temp = x.toString().split('');  //.split() output = [2,3,2,1]
    // takes the temp array reverses it then .join("") brings string back together
    var y = temp.reverse().join('') //output 1232
    // check if reverse string = orginal string
    if(y==x){
        return true;
    } else
        return false;
     
     
 };

 isPalindrome(2321)