// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("Loaded!");

    // DOM elements
    const takeOffBtn = document.getElementById("takeoff");
    const landingBtn = document.getElementById("landing");
    const missionAbortBtn = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBg = document.getElementById("shuttleBackground");
    const shuttleHt = document.getElementById("spaceShuttleHeight");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const leftBtn = document.getElementById("right");
    const rightBtn = document.getElementById("left");
    const rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.bottom = "0px";
    rocketImg.style.left = "175px";



    takeOffBtn.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirm) {
            flightStatus.innerHTML = "Shuttle in flight."

            shuttleBg.style.backgroundColor = "blue";

            shuttleHt.innerHTML = Number(shuttleHt.innerHTML) + 10_000;
        };
    });

    landingBtn.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");

        flightStatus.innerHTML = "The shuttle has landed.";

        shuttleBg.style.backgroundColor = "green";

        shuttleHt.innerHTML = 0;
    });

    missionAbortBtn.addEventListener("click", function() {
        let confirm = window.confirm("Confirm that you want to abort the mission.");

        console.log(confirm);

        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";

            shuttleBg.style.backgroundColor = "green";

            shuttleHt.innerHTML = 0;
        };
    });

    upBtn.addEventListener("click", function() {
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) + 10 + "px"
        console.log(rocketImg.style.bottom);
    });
    downBtn.addEventListener("click", function() {
        rocketImg.style.bottom = parseInt(rocketImg.style.bottom) - 10 + "px"
        console.log(rocketImg.style.bottom);
    });
    leftBtn.addEventListener("click", function() {
        rocketImg.style.left = parseInt(rocketImg.style.left) + 10 + "px"
        console.log(rocketImg.style.left);
    });
    rightBtn.addEventListener("click", function() {
        rocketImg.style.left = parseInt(rocketImg.style.left) - 10 + "px"
        console.log(rocketImg.style.left);
    });


});