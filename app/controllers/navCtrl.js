angular.module("gwDev")
.controller("navCtrl", function ($window, $scope, $location) {

    $scope.toProjects = function() {
        $location.url("/projects")
    }

    $scope.toSplash = function() {
        $location.url("/splash")
    }

    $scope.toPdf = function() {
        $location.url("/pdf")
    }

    $scope.toTech = function() {
        $location.url("/technologies")
    }

    $scope.toMail = function() {
        $location.url("/email")
    }
    
    $scope.toGitHub = function() {
        $window.open("http://github.com/Gward2489")
    }

    $scope.toLinkedIn = function() {
        $window.open("http://www.linkedin.com/in/garrettwarddev/")
    }

})