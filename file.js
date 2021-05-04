function refresh() {
    document.getElementById('result-text').classList.remove('hvr-pulse-grow');
    let n = Math.floor(Math.random() * 6 + 1);

    let guess = document.getElementById('guess').value;
       if (guess == "" || (guess > 6 || guess < 1)) {
        document.getElementById('result-text').innerText = "ENTER CORRECT GUESS NUMBER";
    } else {
        switch (n) {
            case 1:
                document.getElementById('dice-image').setAttribute("src", "dice1.png");
                break;
            case 2:
                document.getElementById('dice-image').setAttribute("src", "dice2.png");
                break;
            case 3:
                document.getElementById('dice-image').setAttribute("src", "dice3.png");
                break;
            case 4:
                document.getElementById('dice-image').setAttribute("src", "dice4.png");
                break;
            case 5:
                document.getElementById('dice-image').setAttribute("src", "dice5.png");
                break;
            case 6:
                document.getElementById('dice-image').setAttribute("src", "dice6.png");
                break;
            default:
                break;
        }
        if (n == guess) {
            document.getElementById('result-text').innerText = "WINNER";
            document.getElementById('result-text').classList.add('hvr-pulse-grow');
        } else {
            document.getElementById('result-text').innerText = "TRY AGAIN!";
        }
    }

}
