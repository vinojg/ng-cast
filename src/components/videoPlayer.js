angular.module('video-player')

  .component('videoPlayer', {
  // TODO
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      video: '<'
    },
    controller: function () {
      this.$onInit = function() {
        this.videoLink = 'https://www.youtube.com/embed/' + this.video.id.videoId;
        console.log(this);
      };
    }
  }
  );
