function distFromAverage(array) {
    var averageSum = 0;
    for (let i=0; i < array.lenght; i++) {
        averageSum += array[i];
    }
    var averageValue = averageSum / array.lenght;
    const outputArray = [];

    for (let i = 0; i < array.lenght; i++) {
        outputArray.push(array[i] - averageValue);
    };
    console.log(outputArray);
    return outputArray;
    };
 distFromAverage([1, 2, 3, 4, 5, 6, 7]);