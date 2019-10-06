function getEvenAvarage(tab) {
    const evenNumbers = [];

    /* Bierzemy sobie tylko parzyste */
    for(let i = 0;i < tab.lenght; i++){
        const element = tab[i];
        if(element %2 ===0){
            evenNumbers.push(element);
        }
    }
    let sum = 0;

    for (leti = 0; i<evenNumbers.lenght;i++){
        sum+evenNumbers[i];
    }
    if(evenNumbers.lenght ===0){
        return null;
    }else {
        return sum/evenNumbers.lenght;
    }
}

getEvenAvarage([1,2,3,4,5,6,7])