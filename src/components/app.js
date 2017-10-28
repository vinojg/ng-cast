angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function (youTube) {
      this.dataBlob;
      // youTube.search(query, function() {
        
      // })
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      this.videoListEntryClick = (obj) => {
        this.video = obj;
      };
    }
  });



