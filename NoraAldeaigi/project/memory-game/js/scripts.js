$(document).ready(function () {
    // Timer start
    var counter = 0;
    function countTime() {
        setInterval(function () {
            var counter = parseInt($('.time').html());

            if (counter !== 1500) {
                //function()
                setTimeout(function () {
                    //your code to be executed after 1 second
                    $('.time').html(counter + 1);
                }, 1000);
            }
            else {
                clearInterval(counter);
                // $('.time').html('time is up');
            }

        }, 1500);
    }

    const cards = document.querySelectorAll('.memory-card');
    let lockedBoard = false;
    let hasFlipedCard = false;
    let firstCard, seconedCard;
    let winner = 0;

    function setTimer() {
        if (counter === 0) {
            countTime();
        }
    }
    //flip cards 
    cards.forEach(cards => cards.addEventListener('click', flipcard));

    function flipcard() {
        setTimer()
        if (lockedBoard) return;
        if (this === firstCard) return;
        this.classList.add('flip');

        if (!hasFlipedCard) {
            hasFlipedCard = true;
            firstCard = this;
        }
        else {
            seconedCard = this;
            checkForMatch();
        }

    }
    // check for match cards 
    // if two cards not equals flip hide cards  
    function checkForMatch() {
        if (firstCard.dataset.framework === seconedCard.dataset.framework) {
            disableCards();
            winner += 1;
            win();
        }
        else {
            unFlipedCards();
        }
    }


    function disableCards() {
        firstCard.removeEventListener('click', flipcard);
        seconedCard.removeEventListener('click', flipcard);
        resetboard();
    }

    function unFlipedCards() {

        lockedBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            seconedCard.classList.remove('flip');

            lockedBoard = false;
            resetboard();
        }, 1500);

    }




    function resetboard() {
        [hasFlipedCard, lockedBoard] = [false, false];
        [firstCard, seconedCard] = [null, null];
    }
    // winner sweet aleart appear 
    function pop() {


        //document.getElementsByClassName("box")[0].style.display = "block";
        $('.box').show();

    }
    // check for win - all cards open 
    function win() {

        if (winner === 6) {
            pop();
            $('.box #TimeTaken').html($('.time').text());
            $('#TimerDiv').hide();
            clearInterval(counter);
        }
    }

    //randomaly arrange the cards 
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();

    //play again 
    $("#close").on("click", function () {
        window.location.reload(false);
    })
});
