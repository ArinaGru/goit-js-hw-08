import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
let parsedTime;

const onTimeUpdate = data => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
};

function setVideoTime(player, savedTime) {
  if (savedTime) {
    parsedTime = JSON.parse(savedTime);
  } else {
    parsedTime = 0;
  }
  player.setCurrentTime(parsedTime);
}
player.on('timeupdate', throttle(onTimeUpdate, 1000));
setVideoTime(player, localStorage.getItem(STORAGE_KEY));
