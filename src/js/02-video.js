import throttle from "lodash.throttle";
import Player from '@vimeo/player';
 


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

    localStorage.setItem("videoplayer-current-time", JSON.stringify(Math.round(data.seconds)))
 
};


player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));