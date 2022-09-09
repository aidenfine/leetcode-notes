/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var res = nums.filter(function(v){
        return nums.filter(function(v1){
            return v1 == v;
        }).length == 1;
    })
     output = res
    return output;
    
};
singleNumber([2,2,1])