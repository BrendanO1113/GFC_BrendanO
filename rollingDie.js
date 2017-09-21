function rollDice(minimum, maximum) {
    return Math.floor(Math.random() * (1 + maximum - minimum));
}


for (var rollCounter = 0; rollCounter < 10; rollCounter++){
    console.log(rollDice(1,6));
}