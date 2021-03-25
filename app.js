//rock paper scrissors has three outcomes
//win, losek, draw
//user either selects rock, paper scissors

let messages = [
    'You have tied', 'You lose', 'Contratulations you have won'
]

let comChoices = ['rock', 'scissors', 'paper']

function shoot(choice) {
    comChoice = random()
    if (choice == comChoice) {
        document.getElementById('message').innerText = messages[0]
    } else if (choice != comChoice) {
        if (choice == 'scissors' && comChoice == 'rock') {
            document.getElementById('message').innerText = messages[1]
        } else if (choice == 'rock' && comChoice == 'paper') {
            document.getElementById('message').innerText = messages[1]
        } else if (choice == 'paper' && comChoice == 'scissors') {
            document.getElementById('message').innerText = messages[1]
        } else
            document.getElementById('message').innerText = messages[2]

    }
    document.getElementById('computerChoice').innerText = `The computer chose: ${comChoice.toUpperCase()}`
}

function random() {
    let rand = Math.floor(Math.random() * comChoices.length)
    return comChoices[rand]

}

function draw() {
    let template = ''
    for (let index = 0; index < comChoices.length; index++) {
        const element = comChoices[index];
        template += `<button type="button" id="element" class="btn btn-primary mx-4" onclick="shoot('${comChoices[index]}')">${comChoices[index].toUpperCase()}</button>`

    }
    document.getElementById('btns').innerHTML = template

}



draw()


