function loop(nums,target){
    let steps = 0;
for(let i=0;i<nums.length;++i){
    steps++;
if(nums[i] === target) {
    return [i,steps];
}

}
return -1;
}


console.log(loop([10, 20, 30, 40, 50],30));

