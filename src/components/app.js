angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function (youTube) {
      this.dataBlob;
      
      youTube.search('puppies', (data) => {
        this.videos = data;
        this.video = this.videos[0];
      });

      this.videoListEntryClick = (obj) => {
        this.video = obj;
      };
    }
  });



