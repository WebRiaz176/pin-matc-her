function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        getPin();
}
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayedPin = document.getElementById('display-pin');
    displayedPin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;

    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }

        else if(number === '<'){
            const digit = previousTypeNumber.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            typeNumberField.value = remainingDigit;
        }
    }

    
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const generatePinField = document.getElementById('display-pin');
    const currentPin = generatePinField.value;

    const typePinField = document.getElementById('typed-numbers');
    const typeNumber = typePinField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailMessage = document.getElementById('pin-failure');

    if(typeNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailMessage.style.display = 'none';
    }

    else{
        pinSuccessMessage.style.display = 'none';
        pinFailMessage.style.display = 'block';
    }
})