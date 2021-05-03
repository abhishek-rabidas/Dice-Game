function refresh() {
    let n = Math.floor(Math.random() * 6 + 1);
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
}