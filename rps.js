function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numChoice(randToInt());
    console.log(botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToInt() {
    return Math.floor(Math.random() * 3);
}

function numChoice(number) {
    return ['rock', 'paper', 'scissor'] [number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDataBase = {
     'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
     'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
     'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };
    
    var yourScore = rpsDataBase[humanChoice][botChoice];
    var botScore = rpsDataBase[botChoice][humanChoice];
    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if(yourScore===0) {
        return {'message': 'Game Lost', 'color': 'red'};
    } else if(yourScore===0.5) {
        return {'message': 'Game Tied', 'color': 'yellow'};
    } else {
        return {'message': 'Game Won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var ImageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src = '" + ImageDataBase[humanImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color']  + "; font-size: 60px; padding: 30px;' >" +  finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src = '"  + ImageDataBase[botImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(233, 38, 24, 1);' >"

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}

