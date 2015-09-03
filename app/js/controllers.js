/* Controllers */

(function() {
    'use strict';
    angular
        .module('controllers', [])
        .controller('apiCallController', ['$scope', 'apiServices',
            function($scope, apiServices) {
                console.log('Is this hitting?');
                var c = apiServices.getApi();
                c.get(function(data){
                    console.log(data);
                },
                function(){
                    console.log("Your api call has failed.");
                })
            }]);
})();





//'use strict';
//
//var heroesApp = angular.module('heroesApp', []);
//
//heroesApp.controller('apiCall', ['$scope,', '$http',
//    function($scope, $http) {
//        $http.get('http://gateway.marvel.com/v1/public/characters?apikey=1098c619ddb1b056e3d4fff799b7c4ef&hash=3ce678851c32e27213fd5bafe249d0dc&ts=1435094344').
//        success(function(data, status, headers, config) {
//            $scope.heroData = data;
//            console.log($scope.heroData);
//            // this callback will be called asynchronously
//            // when the response is available
//        }).
//        error(function(data, status, headers, config) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//    }
//]);

//var heroController = angular.module('heroController', []);
//
//function heroController($scope, $http){
//    $http.get('http://gateway.marvel.com/v1/public/characters?apikey=1098c619ddb1b056e3d4fff799b7c4ef&hash=3ce678851c32e27213fd5bafe249d0dc&ts=1435094344').
//        success(function(data, status, headers, config) {
//            $scope.heroData = data;
//            console.log($scope.heroData);
//            // this callback will be called asynchronously
//            // when the response is available
//        }).
//        error(function(data, status, headers, config) {
//            // called asynchronously if an error occurs
//            // or server returns response with an error status.
//        });
//}

//heroesControllers.controller('PhoneListCtrl', ['$scope', '$http',
//  function($scope, $http) {
//    $scope.heroes = heroes.query();
//    //$scope.orderProp = 'age';
//  }]);
//    getHeroes();

//heroControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//  function($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    }
//  }]);
