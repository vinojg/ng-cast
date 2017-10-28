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
        
        // dataBlob = response.data.item;
        callback(response.data.items);
        console.log('success', response.data.items);
        console.log('success', response.data.items);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error('backcats: Failed to send message', response);
      });
    };
  });
  
  
//   window.firstLoad = true;
// var searchYouTube = ({max, key, query}, context) => {
//   // TODO
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     params: {
//       maxResults: max,
//       key: key,
//       part: 'snippet',
//       q: query,
//       type: 'video'
//     },
//     success: function (data) {
//       var dataBlob = data;
//       if (!window.firstLoad) {
//         context.setState({videoCollection: dataBlob.items});
//       }
//       if (window.firstLoad) {
//         ReactDOM.render(<App videoData={dataBlob.items}/>, document.getElementById('app'));
//         window.firstLoad = false;
//       }
//     },
//     error: function (data) {
      
//     }
//   });
// };
