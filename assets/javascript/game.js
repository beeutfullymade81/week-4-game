
    var rdm = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').text(rdm);

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    var blueNum = Math.floor(Math.random() * 11 + 1);
    var redNum = Math.floor(Math.random() * 11 + 1);
    var greenNum = Math.floor(Math.random() * 11 + 1);
    var yellNum = Math.floor(Math.random() * 11 + 1);
    $('#Wins').text(wins);
    $('#Losses').text(losses);

    function resetGame() {
        var rdm = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(rdm);
        var blueNum = Math.floor(Math.random() * 11 + 1);
        var redNum = Math.floor(Math.random() * 11 + 1);
        var greenNum = Math.floor(Math.random() * 11 + 1);
        var yellNum = Math.floor(Math.random() * 11 + 1);
        var playerTotal = 0;
        $('#totalScore').text(playerTotal);
        console.log(playerTotal);
        console.log(rdm);
    }
    function youLose() {
        alert('Sorry, You have lost the game.  Please try again.');
        losses--;
        resetGame();
    }

    function youWin() {
        alert("You have won the game.  You still don't get a prize though.");
        wins++;
        resetGame();
    }

    $("#yellow").on("click", function(){
        playerTotal = yellNum + playerTotal;
        $("#totalScore").text(playerTotal);
        console.log(playerTotal);            
        if (playerTotal == rdm) {
            youWin();
        } else if (playerTotal > rdm) {
            youLose();
        }
    });
    $("#blue").on("click", function(){
        playerTotal = blueNum + playerTotal;
        $("#totalScore").text(playerTotal);
        console.log(playerTotal);
        if (playerTotal == rdm) {
            youWin();
        } else if (playerTotal > rdm) {
            youLose();
        }
    });
    $("#red").on("click", function(){
        playerTotal = redNum + playerTotal;
        $("#totalScore").text(playerTotal);
        console.log(playerTotal);
        if (playerTotal == rdm) {
            youWin();
        } else if (playerTotal > rdm) {
            youLose();
        }
    });
    $("#green").on("click", function(){
        playerTotal = greenNum + playerTotal;
        $("#totalScore").text(playerTotal);
        console.log(playerTotal);
        if (playerTotal == rdm) {
            youWin();
        } else if (playerTotal > rdm) {
            youLose();
        }
    });