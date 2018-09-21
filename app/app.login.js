var appButton = angular.module("loginButton", []);

appButton.controller("loginControl", ["$scope", "$window", function($scope,  $window){
    $scope.enterSite = function(){
        $window.location.href = "lib/views/watchthis.pug";        
    }
}]);