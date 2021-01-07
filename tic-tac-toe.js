window.addEventListener('DOMContentLoaded', event => {
    let savedBoard = localStorage.getItem('boardSave');
    let checkBoard = JSON.parse(savedBoard)
    let div = document.getElementById('game');
    let newGame = document.querySelector('.actions');
    let buttonNewGame = document.getElementById('new-game')
    let buttonGiveUp = document.getElementById('give-up');

    let count = 0;
    let currentPlayer = []
    let board = [0,0,0,0,0,0,0,0,0]
    let gameStatus = document.getElementById('game-status')
    if (checkBoard !== null){
        board = checkBoard
        for (let i = 0; i < 9; i++){
            let ele = document.getElementById(`square-${i}`)
            if(checkBoard[i] === 'x'){
                console.log(ele)
               ele.innerHTML = '<img src = player-x.svg />'
            } else if(checkBoard[i] === 'o'){
                ele.innerHTML = '<img src = player-o.svg />'
            }
        }
    }
    let checkWin = () =>{

        if (board[0] === board[1] && board[1] ===board[2] && board[2] !== 0){
            gameStatus.innerText = "the winner is " + board[0];
            buttonNewGame.disabled = false
        }else if (board[3] === board[4] && board[4] ===board[5] && board[3] !== 0){
            gameStatus.innerText = "the winner is " + board[3];
            buttonNewGame.disabled = false

        }else if (board[6] === board[7] && board[7] === board[8] && board[8] !== 0){
            gameStatus.innerText = "the winner is " + board[6];
            buttonNewGame.disabled = false

        }else if (board[0] === board[3] && board[3] ===board[6] && board[3] !== 0){
            gameStatus.innerText = "the winner is " + board[0];
            buttonNewGame.disabled = false

        }else if (board[1] === board[4] && board[4] ===board[7] && board[1] !== 0){
            gameStatus.innerText = "the winner is " + board[1];
            buttonNewGame.disabled = false
        }else if (board[2] === board[5] && board[5] ===board[8] && board[2] !== 0){
            gameStatus.innerText = "the winner is " + board[2];
            buttonNewGame.disabled = false

        }else if (board[0] === board[4] && board[4] ===board[8] && board[0] !== 0){
            gameStatus.innerText = "the winner is " + board[0];
            buttonNewGame.disabled = false

        }else if (board[2] === board[4] && board[4] ===board[6] && board[2] !== 0){
            gameStatus.innerText = "the winner is " + board[2];
            buttonNewGame.disabled = false

        }else if(!board.includes(0)){
            gameStatus.innerText = "tie";
            buttonNewGame.disabled = false;
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
        }else {
            buttonNewGame.disabled = false
        }
        board[currentSquare] = currentPlayer[currentPlayer.length -1];
        let boardSave = JSON.stringify(board);
        localStorage.setItem('boardSave', boardSave)
        checkWin();
    });
    newGame.addEventListener('click', event => {
        if (event.target !== event.currentTarget && event.target.innerText === 'New Game') {
            board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            gameStatus.innerText = '';
            buttonNewGame.disabled = true;
            buttonGiveUp.disabled = false;
            localStorage.removeItem('boardSave')
            for (let i = 0; i < 9; i ++) {
                let ele = document.getElementById(`square-${i}`)
                ele.innerHTML = ''
            }
        }else if( event.target !== event.currentTarget && event.target.innerText === 'Give Up') {
            buttonNewGame.disabled = false;
            buttonGiveUp.disabled = true;
            gameStatus.innerText = `Winner: ${currentPlayer[currentPlayer.length-2]}`;

        }
    })

})
