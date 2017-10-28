angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
    this.search = function (query, callback) {
     
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: query,
          type: 'video',
          videoEmbeddable: true
        }
      }).then(function successCallback(response) {
        callback(response.data.items);
        console.log('success', response.data.items);
      }, function errorCallback(response) {
        console.error('backcats: Failed to send message', response);
      });
    };
  });