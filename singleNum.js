var singleNumber = function(nums) {
    const ht = {}; //this creates object to show how many times something is in array -> 
    // Example below
    //{1000: 4,} first digit is number/2nd digit is how many times it appears 
    // for example with the array [2,2,1,2,2,1,3] the ht would show {2: 4, 1: 2, 3: 1}

    for(const num of nums){
        // this loops over and creates tallys of what numbers appear in arr 
        ht[num] = ht[num] + 1 || 1;  //creates tally count 
    }

    for(const key in ht){
        // if value in ht is === 1 return that value
        if(ht[key] === 1){
            return key 
        }
    }
}
singleNumber([2,2,1,2,2,1,3])