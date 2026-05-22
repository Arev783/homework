function bublesort(arr){
    let steps = 0;
    for(let i=0;i<arr.length;++i){
        for(let j=0;j<arr.length-1;++j){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            steps++;
        }
    }
    return [arr,steps];
}

console.log(bublesort([5, 3, 8, 4, 2]));