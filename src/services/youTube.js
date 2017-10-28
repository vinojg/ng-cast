angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        query: 'puppies',
        type: 'video',
        videoEmbeddable: true
      }
    }).then(function successCallback(response) {
      dataBlob = response;
      console.log('success', dataBlob);
      console.log('success', response);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.error('backcats: Failed to send message', response);
    });
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
