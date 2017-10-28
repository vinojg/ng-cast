angular.module('video-player')

  .component('search', {
  // TODO
    templateUrl: 'src/templates/search.html',
    bindings: {
      update: '<'
    },
    controller: function () {
      this.query = '';
    }
  });
