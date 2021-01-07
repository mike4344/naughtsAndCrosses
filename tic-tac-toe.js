window.addEventListener('DOMContentLoaded', event => {
    let div = document.getElementById('game');
    let count = 0;
    let currentPlayer = []
    let board = [0,0,0,0,0,0,0,0,0]
    let gameStatus = document.getElementById('game-status')
let checkWin = () =>{

    if (board[0] === board[1] && board[1] ===board[2] && board[2] !== 0){
        gameStatus.innerText = "the winner is " + board[0]
    }else if (board[3] === board[4] && board[4] ===board[5] && board[3] !== 0){
        gameStatus.innerText = "the winner is " + board[3]

    }else if (board[6] === board[7] && board[7] === board[8] && board[8] !== 0){

        gameStatus.innerText = "the winner is " + board[6]
    }else if (board[0] === board[3] && board[3] ===board[6] && board[3] !== 0){
        gameStatus.innerText = "the winner is " + board[0]

    }else if (board[1] === board[4] && board[4] ===board[7] && board[1] !== 0){
        gameStatus.innerText = "the winner is " + board[1]

    }else if (board[2] === board[5] && board[5] ===board[8] && board[2] !== 0){
        gameStatus.innerText = "the winner is " + board[2]

    }else if (board[0] === board[4] && board[4] ===board[8] && board[0] !== 0){
        gameStatus.innerText = "the winner is " + board[0]

    }else if (board[2] === board[4] && board[4] ===board[6] && board[2] !== 0){
        gameStatus.innerText = "the winner is " + board[2]

    }else if(!board.includes(0)){
        gameStatus.innerText = "tie"
    }
}
    div.addEventListener('click', event => {
        let id = event.target.id
        let currentSquare = Number(id[id.length-1])
        if (gameStatus.innerText === ''){
        if (event.currentTarget !== event.target) {
            if ( event.target.innerHTML === ''){
                if ( count === 0) {
                    count ++;
                    currentPlayer.push('x')
                    event.target.innerHTML = '<img src = player-x.svg />'
                }else {
                    count --;
                    currentPlayer.push('o')
                    event.target.innerHTML = '<img src = player-o.svg />'
                }

            }
        }
    }
        board[currentSquare] = currentPlayer[currentPlayer.length -1]
        console.log(board)
        checkWin()
    })
})
