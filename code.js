HTMLMediaElement.prototype.play = new Proxy(HTMLMediaElement.prototype.play, {
  apply(target, thisArg, args) {
    thisArg.playbackRate = 16.0; // force 16x playback rate
    return Reflect.apply(target, thisArg, args);
  }
});
