'use strict';

// Declare app level module which depends on views, and components
//angular.module('heroesApp', [
//    'controllers',
//    'services',
//    'directives',
//    'filters',
//    'animations',
//    'ngRoute',
//    'ngResource'
//]);

var heroesApp = angular
    .module('heroesApp', [
        'controllers',
        'services',
        'ngResource',
        'ui.router'
    ])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'partials/home.html',
                controller: 'apiCallController'
            })

    }
    ]);


    //.config('$resourceProvider',
    //    function($resourceProvider){
    //        //Don't strip trailing slashes from calculated URLs
    //        $resourceProvider.defaults.stripTrailingSlashes = false;
    //
    //    }
    //);
