const buttons = document.querySelectorAll(".hand");

const playerDisplay = document.querySelector("#player-display");
const opponentDisplay = document.querySelector("#opponent-display");
const result = document.querySelector("#result");
const oneMore = document.querySelector("#one-more");

function randomHand() {
    const hand = Math.floor(Math.random() * 3);
    if (hand === 0) {
        return "グー";
    } else if (hand === 1) {
        return "チョキ";
    } else {
        return "パー";
    }
}

function judge(player, opponent) {
    if (player === opponent) {
        return "あいこ";
    } else if ((player === "グー" && opponent === "チョキ") ||
        (player === "パー" && opponent === "グー") ||
        (player === "チョキ" && opponent === "パー")) {
        return "勝ち";
    } else {
        return "負け";
    }
}


for (let button of buttons) {
    button.addEventListener("click", function (e) {
        const player = e.target.name;
        const opponent = randomHand();

        playerDisplay.textContent += player;
        opponentDisplay.textContent += opponent;

        result.textContent += judge(player, opponent);

        for (let btn of buttons) {
            btn.disabled = true;
        }
    });
}

oneMore.addEventListener("click", function () {
    playerDisplay.textContent = "あなたの手: ";
    opponentDisplay.textContent = "コンピュータの手: ";
    result.textContent = "勝敗: ";
    for (let btn of buttons) {
        btn.disabled = false;
    }
})
