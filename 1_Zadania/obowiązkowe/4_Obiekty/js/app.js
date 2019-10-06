function multiply(array){
    var suma = 1;

    for (i=0; i<array.lenght; i++){
        suma = suma*array[i];
    }
    return suma;
}
multiply([1,2,3,4,5,6,7])