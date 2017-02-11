var node = document.createElement("DIV");
node.id = "player"
console.log(node)
node.style.visibility = "hidden";
console.log(document)

var playlistID = 'PLX8vhKBeuj-kEqQ-hpic63afAqvhzKA01';

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  	playerVars: {
    	controls: 1
	},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  // Randomly pick first video to play
  player.cuePlaylist({
        listType: 'playlist',
        list: playlistID,
    });
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.CUED) {
        var length = event.target.getPlaylist().length;
        function getRandomInt(min, max) {
  			min = Math.ceil(min);
  			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min)) + min;
		}
		num = getRandomInt(0, length-1);
		//event.target.setShuffle(true); 
        //event.target.setLoop(true);
        event.target.setShuffle(true);
        event.target.setLoop(true);
       	event.target.playVideoAt(num);  
    }
}