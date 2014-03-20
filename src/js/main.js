(function (window, document, undefined){
  'use strict';

  var K7 = (function () {
    var exports = {}
      , module = {}
      , player = document.createElement('audio');
      , playing = false
      , playlist = []
      , indexTrack = 0
      , currentTrack;

    module.setTrack = function setTrack() {
      currentTrack = playlist.[this.indexTrack];
      player.src = currentTrack.src;
      return this;
    };

    exports.animation = function animation() {
      return this;
    };

    exports.playPause = function playPause() {
      if ( playing ) {
        player.pause();
        playing = false;
      }
      else {
        player.play();
        playing = true;
      }
      return this;
    };

    exports.stop = function stop() {
      if ( playing ) {
        player.load();
        playing = false;
      }
      return this;
    };

    exports.prev = function prev() {
      indexTrack --;
      if (this.indexTrack < 0) this.indexTrack = 0;

      module.setTrack();
      exports.play();
      return this;
    };

    exports.next = function next() {
      indexTrack ++;
      if (this.indexTrack > playlist.length) this.indexTrack = 0;

      module.setTrack();
      exports.play();
      return this;
    };

    return exports;
  })();

  window.K7 = K7;
})(window, document);