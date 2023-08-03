import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY_TIME = "currentTime";

const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem(KEY_TIME, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_TIME)) || 0);

