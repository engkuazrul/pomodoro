<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro App</title>
    <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <!--Heading-->
        <h1 class="text-center my-5 heading">Pomodoro App ⏰</h1>

        <!--Session-->
        <h1 id="session" class="text-center my-5">Work</h1>

        <!--Main Timer-->
        <div id="time" class="container timer">
            <div class="row col-sm-12">
                <div class="col-sm-5">
                    <h4 class="timeText" id="time_min">25</h4>
                </div>
                <div class="col-sm-2">
                    <h4 class="timeText">:</h4>
                </div>
                <div class="col-sm-5">
                    <h4 class="timeText" id="time_sec">00</h4>
                </div>
            </div>
        </div>

        <!--Break Timer-->
        <div id="break" style="display: none;" class="container timer">
            <div class="row col-sm-12">
                <div class="col-sm-5">
                    <h4 class="timeText" id="break_min">05</h4>
                </div>
                <div class="col-sm-2">
                    <h4 class="timeText">:</h4>
                </div>
                <div class="col-sm-5">
                    <h4 class="timeText" id="break_sec">00</h4>
                </div>
            </div>
        </div>

        <div class="container btnTimer">
            <button class="btn" onclick="start()"><i class="fa fa-play fa-lg"></i></button>
            <button class="btn" onclick="stop()"><i class="fa fa-pause fa-lg"></i></button>
            <button class="btn" onclick="next()"><i class="fa fa-fast-forward fa-lg"></i></button>
            <button class="btn" onclick="reset()"><i class="fa fa-repeat fa-lg"></i></button>
        </div>
    </div>
    <!-- <div class="container">
        <h3 class="text-center">Pomodoro Timer ⏰</h3>
        <p class="text-center" id="session">Work</p>
        <p class="text-center" id="time"><span id="time_min">00</span> : <span id="time_sec">15</span></p>
        <p class="text-center" id="break" style="display: none;"><span id="break_min">00</span> : <span id="break_sec">20</span></p>
        <p class="text-center"><button type="button" class="btn btn-primary" onclick="start()">Start</button><button type="button" class="btn btn-warning" onclick="stop()">Stop</button><button type="button" class="btn btn-danger" onclick="reset()">Reset</button></p>
        <p class="text-center" id="status">Successfully Session: <span id="cycle">0</span></p>
    </div> -->
    <script src="jquery/dist/jquery.min.js"></script>
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="timer.js"></script>
</body>

</html>