var K7 = {

  var player = document.createElement('audio');
    , playing = false
    , playlist = []
    , indexTrack = 0
    , currentTrack;

  this.animation = function() {

  };

  this.playPause = function() {
    if ( playing ) {
      player.pause();
      playing = false;
      this.animation();
    }
    else {
      player.play();
      playing = true;
      this.animation();
    }
  };

  this.stop = function() {
    if ( playing ) {
      player.stop();
      playing = false;
    }
  };

  this.setTrack = function() {
    currentTrack = playlist.[this.indexTrack];
    player.src = currentTrack.src;
  };

  this.prev = function() {
    indexTrack --;

    if (this.indexTrack < 0) this.indexTrack = 0;

    this.setTrack();
    this.play();
  };

  this.next = function() {
    indexTrack ++;

    if (this.indexTrack > playlist.length) this.indexTrack = 0;

    this.setTrack();
    this.play();
  };

};