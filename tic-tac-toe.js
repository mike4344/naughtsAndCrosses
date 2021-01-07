window.addEventListener('DOMContentLoaded', event => {
    let div = document.getElementById('game');
    let count = 0;

    div.addEventListener('click', event => {
        if ( event.target.innerHTML === ''){
            if ( count === 0) {
                count ++;
                event.target.innerHTML = '<img src = player-x.svg />'
            }else {
                count --;
                event.target.innerHTML = '<img src = player-o.svg />'
            }
        }
    })
})
