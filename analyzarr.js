function analyzeArray(arr){

    let average = arr.reduce((prev, curr) => prev + curr)/arr.length;

    let min = arr[0];
    let max = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    let length = arr.length;


    return {
        average,
        min,
        max,
        length,
    }
}

export {analyzeArray}