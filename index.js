(function(){
  angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<hello></hello>'
        })
        .when('/goodbye', {
          template: '<goodbye></goodbye>'
        });
    });
})();
