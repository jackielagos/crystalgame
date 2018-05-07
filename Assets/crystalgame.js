$(document).ready(function () {

    var win = 0;
    var loss = 0;
    var totalScore = 0;



    var random = Math.floor(Math.random() * (130 - 19 + 1)) + 19;
    $("#boxRandom").html(random);

    var randomCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    var randomTopaz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    var randomQuartz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    var randomEmerald = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    function reset() {
        random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#boxRandom").html(random);

        randomCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        randomTopaz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        randomQuartz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        randomEmerald = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

        totalScore = 0;
        $("#totalBox").html(totalScore);
        currentScore = totalScore

    }




    function addToScoreCrystal() {
        var numberToAdd = parseInt(randomCrystal);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScoreTopaz() {
        var numberToAdd = parseInt(randomTopaz);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScoreQuartz() {
        var numberToAdd = parseInt(randomQuartz);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    function addToScoreEmerald() {
        var numberToAdd = parseInt(randomEmerald);
        var currentScore = parseInt(totalScore);
        totalScore = numberToAdd + parseInt(currentScore);
    }

    $("#crystal").on("click", function () {

        addToScoreCrystal();

        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            }
            else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });


    $("#topaz").on("click", function () {

        addToScoreTopaz();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            }
            else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });



    $("#quartz").on("click", function () {

        addToScoreQuartz();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            }
            else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });


    $("#emerald").on("click", function () {

        addToScoreEmerald();
        $("#totalBox").html(totalScore);

        function stillPlaying() {

            var playerInt = parseInt(totalScore);
            var targetInt = parseInt(random);
            if (playerInt === targetInt) {
                alert("You win! Press 'ok' to play again.");
                win++
                $("#winBox").html(win);
                reset();

            }
            else if (playerInt > targetInt) {
                alert("You lose! Press 'ok' to play again.");
                loss++
                $("#lossBox").html(loss);
                reset();
            }

        }

        stillPlaying();

    });

});