function calculate(operation) {
    let number1 = parseInt(document.count.no1.value);
    let number2 = parseInt(document.count.no2.value);

    let result = 0;

    if( (isNaN(number1) == false) && (isNaN(number2) == false) ) {
        switch(operation) {
            case 1:
                result = number1 + number2;
                break;
            case 2:
                result = number1 - number2;
                break;
            case 3:
                result = number1 * number2;
                break;
            case 4:
                result = number1 / number2;
                break;
        }
        document.count.res.value = result;
    }
    else {
        alert("enter correct values");
    }
}