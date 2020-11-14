'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: function(urlattr){
            return '<phone-detail-component phone-id="\''+ String(urlattr.phoneId) +'\'"></phone-detail-component>';
          }
        }).
        otherwise('/phones');
    }
  ]);
