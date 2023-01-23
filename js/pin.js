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