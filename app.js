function getsum(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    
    console.log(sum);
    
    return sum;
}

getsum([1,2,3,4,5,6,7,8,9,10]); // Imprime: 55