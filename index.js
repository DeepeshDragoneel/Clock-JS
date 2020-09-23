const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

function move(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if(secondsDegrees>=440){
        secHand.classList.add("notrans");
    }
    secHand.style.transform = "rotate("+secondsDegrees+"deg)";

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 +90;
    if (minsDegrees >= 448) {
        minHand.classList.add("notrans");
    }
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360)+((mins/60)*30)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(seconds + "=" +secondsDegrees);
    console.log(mins + "=" +minsDegrees);
    console.log(hour + "=" +hourDegrees);
}

setInterval(move, 1000);