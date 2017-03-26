var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/projects', {
      templateUrl: '../public/views/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'project'
    })
    .when('/ty', {
      templateUrl: '../public/views/tys-site.html',
      controller: 'tyController',
      controllerAs: 'ty'
    })
    .when('/fitvid', {
      templateUrl: '../public/views/fitvid.html',
      controller: 'FitvidController',
      controllerAs: 'fitvid'
    })
    .when('/stem', {
      templateUrl: '../public/views/stementor.html',
      controller: 'StemController',
      controllerAs: 'stem'
    })
    .when('/eandt', {
      templateUrl: '../public/views/eandt.html',
      controller: 'EandtController',
      controllerAs: 'eandt'
    })
    .when('/pbf', {
      templateUrl: '../public/views/personal-best-fitness.html',
      controller: 'PbfController',
      controllerAs: 'pbf'
    })
    .otherwise({
      redirectTo: '/projects'
    });//End route

}]);//End config;
