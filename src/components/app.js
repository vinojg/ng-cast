angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function (youTube) {
      this.dataBlob;
      
      this.search = (query) => {
        if (query.length > 0) {
          youTube.search(query, (data) => {
            this.videos = data;
            this.video = this.videos[0];
          });
        }
      };
      this.videoListEntryClick = (obj) => {
        this.video = obj;
      };
      this.$onInit = function() {
        this.search('snoop dog planet earth');
      };
    }
  });



