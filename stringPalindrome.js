/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,"") // [^a-z0-9]will remove any special chars
    let leftIndex = 0;
    let rightIndex = s.length -1; //gets last letter of string
    while(leftIndex < rightIndex){
        if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false; // best case if last letter isnt = to first letter
        leftIndex++;
        rightIndex--;
    }
    return true
    
}

/*
*/