<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SnakeMania - Ek Gaming Katha</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/snackbg.jpg);
background-size: cover;

background-repeat: fit-cover;">
    <center>
        <div class="body">
            <div class="con">
                <div id="scoreBox">Score: 0</div>
                <div id="hiscoreBox">HiScore: 0</div>
                <div>
                    <button style="padding:0.2rem;" id="exit"
                        onclick="history.back()"><b>EXIT</b>🏡</button>
                </div>
            </div>
            <div class="board">
                <div id="board"></div>
            </div>

        </div>
    </center>
</body>
<script defer src="index.js"></script>
</html>